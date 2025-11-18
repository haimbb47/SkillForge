"use client";

import { ethers } from "ethers";
import { useCallback, useEffect, useMemo, useState } from "react";
import { FhevmInstance } from "@/fhevm/fhevmTypes";
import { FhevmDecryptionSignature } from "@/fhevm/FhevmDecryptionSignature";
import { GenericStringStorage } from "@/fhevm/GenericStringStorage";

const SKILLFORGE_ABI = [
  "function getProof(uint256 proofId) view returns (uint256 courseId, uint256 challengeId, address learner, string proofCID, uint8 status, address validator, uint256 submittedAt)",
  "function getProofEncryptedScore(uint256 proofId) view returns (bytes32 encryptedScoreHandle)",
  "function nextProofId() view returns (uint256)",
  "event ProofSubmitted(uint256 indexed proofId, uint256 indexed courseId, address indexed learner, string proofCID)",
  "event ProofValidated(uint256 indexed proofId, address indexed validator, uint8 status)",
] as const;

export type ProofStatus = 0 | 1 | 2; // Pending, Approved, Rejected

export type Proof = {
  id: number;
  courseId: number;
  challengeId: number;
  learner: string;
  proofCID: string;
  status: ProofStatus;
  validator: string;
  submittedAt: number;
  decryptedScore?: bigint; // 解密后的分数（可选）
};

export function useProofs(parameters: {
  contractAddress: `0x${string}` | undefined;
  ethersReadonlyProvider: ethers.ContractRunner | undefined;
  instance: FhevmInstance | undefined;
  ethersSigner: ethers.JsonRpcSigner | undefined;
  fhevmDecryptionSignatureStorage: GenericStringStorage;
  chainId: number | undefined;
}) {
  const {
    contractAddress,
    ethersReadonlyProvider,
    instance,
    ethersSigner,
    fhevmDecryptionSignatureStorage,
    chainId,
  } = parameters;

  const [proofs, setProofs] = useState<Proof[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const contract = useMemo(() => {
    if (!contractAddress || !ethersReadonlyProvider) return undefined;
    return new ethers.Contract(contractAddress, SKILLFORGE_ABI, ethersReadonlyProvider);
  }, [contractAddress, ethersReadonlyProvider]);

  // 获取所有待审核的提交
  const fetchPendingProofs = useCallback(async () => {
    if (!contract) {
      setProofs([]);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // 通过事件获取所有ProofCreated事件（更高效）
      const allProofs: Proof[] = [];
      
      try {
        // 查询所有ProofSubmitted事件
        const filter = contract.filters.ProofSubmitted();
        const events = await contract.queryFilter(filter);
        
        // 从事件中提取proof IDs
        const proofIds = new Set<number>();
        events.forEach((event) => {
          const ev: any = event;
          if (ev.args && ev.args.proofId) {
            proofIds.add(Number(ev.args.proofId));
          }
        });

        // 并行获取每个proof的详情
        const proofPromises = Array.from(proofIds).map(async (id) => {
          try {
            const [
              courseId,
              challengeId,
              learner,
              proofCID,
              status,
              validator,
              submittedAt,
            ] = await contract.getProof(id);

            // 只返回待审核的（status === 0）
            if (Number(status) === 0) {
              return {
                id,
                courseId: Number(courseId),
                challengeId: Number(challengeId),
                learner,
                proofCID,
                status: Number(status) as ProofStatus,
                validator,
                submittedAt: Number(submittedAt),
              } as Proof;
            }
            return null;
          } catch (e) {
            console.log(`Error fetching proof ${id}:`, e);
            return null;
          }
        });

        const results = await Promise.all(proofPromises);
        results.forEach((sub) => {
          if (sub) {
            allProofs.push(sub);
          }
        });
      } catch (e) {
        console.error("Error querying events:", e);
        // Fallback: 如果事件查询失败，尝试使用nextProofId
        try {
          const nextId = await contract.nextProofId();
          const totalProofs = Number(nextId);
          
          for (let i = 1; i < totalProofs; i++) {
            try {
              const [
                courseId,
                challengeId,
                learner,
                proofCID,
                status,
                validator,
                submittedAt,
              ] = await contract.getProof(i);

              if (Number(status) === 0) {
                allProofs.push({
                  id: i,
                  courseId: Number(courseId),
                  challengeId: Number(challengeId),
                  learner,
                  proofCID,
                  status: Number(status) as ProofStatus,
                  validator,
                  submittedAt: Number(submittedAt),
                });
              }
            } catch (e) {
              // 跳过不存在的proof
            }
          }
        } catch (fallbackError) {
          console.error("Fallback method also failed:", fallbackError);
        }
      }

      // 按提交时间倒序排列
      allProofs.sort((a, b) => b.submittedAt - a.submittedAt);

      setProofs(allProofs);
    } catch (e: any) {
      console.error("Error fetching proofs:", e);
      setError(e.message || "Failed to fetch proofs");
    } finally {
      setIsLoading(false);
    }
  }, [contract]);

  // 获取单个提交详情
  const fetchProof = useCallback(
    async (proofId: number): Promise<Proof | null> => {
      if (!contract) return null;

      try {
        const [
          courseId,
          challengeId,
          learner,
          proofCID,
          status,
          validator,
          submittedAt,
        ] = await contract.getProof(proofId);

        return {
          id: proofId,
          courseId: Number(courseId),
          challengeId: Number(challengeId),
          learner,
          proofCID,
          status: Number(status) as ProofStatus,
          validator,
          submittedAt: Number(submittedAt),
        };
      } catch (e: any) {
        console.error(`Error fetching proof ${proofId}:`, e);
        return null;
      }
    },
    [contract]
  );

  // 解密分数（如果需要显示）
  const decryptScore = useCallback(
    async (handle: string): Promise<bigint | null> => {
      if (!instance || !ethersSigner || !contractAddress) {
        return null;
      }

      try {
        const sig = await FhevmDecryptionSignature.loadOrSign(
          instance,
          [contractAddress],
          ethersSigner,
          fhevmDecryptionSignatureStorage
        );

        if (!sig) {
          return null;
        }

        const res = await instance.userDecrypt(
          [{ handle, contractAddress }],
          sig.privateKey,
          sig.publicKey,
          sig.signature,
          sig.contractAddresses,
          sig.userAddress,
          sig.startTimestamp,
          sig.durationDays
        );

        return (res as any)[handle] ?? null;
      } catch (e) {
        console.error("Error decrypting score:", e);
        return null;
      }
    },
    [instance, ethersSigner, contractAddress, fhevmDecryptionSignatureStorage]
  );

  // 监听事件
  useEffect(() => {
    if (!contract || !ethersReadonlyProvider) return;

    const filterCreated = contract.filters.ProofSubmitted();
    const filterVerified = contract.filters.ProofValidated();

    const handleCreated = () => {
      console.log("New proof submitted, refreshing...");
      fetchPendingProofs();
    };

    const handleVerified = () => {
      console.log("Proof validated, refreshing...");
      fetchPendingProofs();
    };

    // 监听事件
    contract.on(filterCreated, handleCreated);
    contract.on(filterVerified, handleVerified);

    // 初始加载
    fetchPendingProofs();

    return () => {
      contract.off(filterCreated, handleCreated);
      contract.off(filterVerified, handleVerified);
    };
  }, [contract, ethersReadonlyProvider, fetchPendingProofs]);

  // 获取所有已审核的提交
  const fetchReviewedProofs = useCallback(async () => {
    if (!contract) {
      setProofs([]);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const allProofs: Proof[] = [];
      
      try {
        // 查询所有ProofValidated事件
        const filter = contract.filters.ProofValidated();
        const events = await contract.queryFilter(filter);
        
        // 从事件中提取proof IDs
        const proofIds = new Set<number>();
        events.forEach((event) => {
          const ev: any = event;
          if (ev.args && ev.args.proofId) {
            proofIds.add(Number(ev.args.proofId));
          }
        });

        // 并行获取每个proof的详情
        const proofPromises = Array.from(proofIds).map(async (id) => {
          try {
            const [
              courseId,
              challengeId,
              learner,
              proofCID,
              status,
              validator,
              submittedAt,
            ] = await contract.getProof(id);

            // 只返回已审核的（status === 1 或 2）
            const statusNum = Number(status);
            if (statusNum === 1 || statusNum === 2) {
              return {
                id,
                courseId: Number(courseId),
                challengeId: Number(challengeId),
                learner,
                proofCID,
                status: statusNum as ProofStatus,
                validator,
                submittedAt: Number(submittedAt),
              } as Proof;
            }
            return null;
          } catch (e) {
            console.log(`Error fetching proof ${id}:`, e);
            return null;
          }
        });

        const results = await Promise.all(proofPromises);
        results.forEach((sub) => {
          if (sub) {
            allProofs.push(sub);
          }
        });
      } catch (e) {
        console.error("Error querying events:", e);
        // Fallback: 如果事件查询失败，尝试使用nextProofId
        try {
          const nextId = await contract.nextProofId();
          const totalProofs = Number(nextId);
          
          for (let i = 1; i < totalProofs; i++) {
            try {
              const [
                courseId,
                challengeId,
                learner,
                proofCID,
                status,
                validator,
                submittedAt,
              ] = await contract.getProof(i);

              const statusNum = Number(status);
              if (statusNum === 1 || statusNum === 2) {
                allProofs.push({
                  id: i,
                  courseId: Number(courseId),
                  challengeId: Number(challengeId),
                  learner,
                  proofCID,
                  status: statusNum as ProofStatus,
                  validator,
                  submittedAt: Number(submittedAt),
                });
              }
            } catch (e) {
              // 跳过不存在的proof
            }
          }
        } catch (fallbackError) {
          console.error("Fallback method also failed:", fallbackError);
        }
      }

      // 按审核时间倒序排列（通过verifiedAt事件时间戳）
      allProofs.sort((a, b) => b.submittedAt - a.submittedAt);

      setProofs(allProofs);
    } catch (e: any) {
      console.error("Error fetching reviewed proofs:", e);
      setError(e.message || "Failed to fetch reviewed proofs");
    } finally {
      setIsLoading(false);
    }
  }, [contract]);

  // 解密提交分数（通过proofId）
  const decryptProofScore = useCallback(
    async (proofId: number): Promise<bigint | null> => {
      if (!instance || !ethersSigner || !contractAddress || !contract) {
        return null;
      }

      try {
        // 获取提交的加密分数handle
        const encryptedScoreHandle = await contract.getProofEncryptedScore(proofId);
        
        // 将handle转换为字符串格式
        const handle = typeof encryptedScoreHandle === 'string' 
          ? encryptedScoreHandle 
          : ethers.hexlify(encryptedScoreHandle);

        // 构建解密签名
        const sig = await FhevmDecryptionSignature.loadOrSign(
          instance,
          [contractAddress],
          ethersSigner,
          fhevmDecryptionSignatureStorage
        );

        if (!sig) {
          return null;
        }

        // 解密
        const res = await instance.userDecrypt(
          [{ handle, contractAddress }],
          sig.privateKey,
          sig.publicKey,
          sig.signature,
          sig.contractAddresses,
          sig.userAddress,
          sig.startTimestamp,
          sig.durationDays
        );

        return (res as any)[handle] ?? null;
      } catch (e) {
        console.error("Error decrypting proof score:", e);
        return null;
      }
    },
    [instance, ethersSigner, contractAddress, fhevmDecryptionSignatureStorage, contract]
  );

  // 为提交解密分数并更新状态
  const decryptAndUpdateProof = useCallback(
    async (proofId: number) => {
      const score = await decryptProofScore(proofId);
      if (score !== null) {
        setProofs((prev) =>
          prev.map((sub) =>
            sub.id === proofId ? { ...sub, decryptedScore: score } : sub
          )
        );
      }
      return score;
    },
    [decryptProofScore]
  );

  return {
    proofs,
    isLoading,
    error,
    fetchPendingProofs,
    fetchReviewedProofs,
    fetchProof,
    decryptScore,
    decryptProofScore,
    decryptAndUpdateProof,
  };
}

