"use client";

import { ethers } from "ethers";
import { useCallback, useEffect, useMemo, useState } from "react";

const SKILLFORGE_ABI = [
  "function getProof(uint256 proofId) view returns (uint256 courseId, uint256 challengeId, address learner, string proofCID, uint8 status, address validator, uint256 submittedAt)",
  "function getProofEncryptedScore(uint256 proofId) view returns (bytes32 encryptedScoreHandle)",
  "event ProofValidated(uint256 indexed proofId, address indexed validator, uint8 status)",
] as const;

export type ValidatedProof = {
  id: number;
  courseId: number;
  challengeId: number;
  learner: string;
  proofCID: string;
  status: number; // 1 = Approved, 2 = Rejected
  validator: string;
  submittedAt: number;
  encryptedScoreHandle?: string;
  decryptedScore?: bigint;
};

export function useValidatedProofs(parameters: {
  contractAddress: `0x${string}` | undefined;
  ethersReadonlyProvider: ethers.ContractRunner | undefined;
}) {
  const { contractAddress, ethersReadonlyProvider } = parameters;

  const [proofs, setProofs] = useState<ValidatedProof[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const contract = useMemo(() => {
    if (!contractAddress || !ethersReadonlyProvider) return undefined;
    return new ethers.Contract(
      contractAddress,
      SKILLFORGE_ABI,
      ethersReadonlyProvider
    );
  }, [contractAddress, ethersReadonlyProvider]);

  // 获取所有已审核的提交
  const fetchValidatedProofs = useCallback(async () => {
    if (!contract) {
      setProofs([]);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // 通过事件获取所有ProofValidated事件
      const allProofs: ValidatedProof[] = [];

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
        const proofPromises = Array.from(proofIds).map(
          async (id) => {
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
                // 获取加密分数handle
                let encryptedScoreHandle: string | undefined;
                try {
                  encryptedScoreHandle =
                    await contract.getProofEncryptedScore(id);
                } catch (e) {
                  console.log(`Could not get encrypted score for ${id}`);
                }

                return {
                  id,
                  courseId: Number(courseId),
                  challengeId: Number(challengeId),
                  learner,
                  proofCID,
                  status: statusNum,
                  validator,
                  submittedAt: Number(submittedAt),
                  encryptedScoreHandle,
                } as ValidatedProof;
              }
              return null;
            } catch (e) {
              console.log(`Error fetching proof ${id}:`, e);
              return null;
            }
          }
        );

        const results = await Promise.all(proofPromises);
        results.forEach((sub) => {
          if (sub) {
            allProofs.push(sub);
          }
        });
      } catch (e) {
        console.error("Error querying events:", e);
      }

      // 按提交时间倒序排列
      allProofs.sort((a, b) => b.submittedAt - a.submittedAt);

      setProofs(allProofs);
    } catch (e: any) {
      console.error("Error fetching validated proofs:", e);
      setError(e.message || "Failed to fetch proofs");
    } finally {
      setIsLoading(false);
    }
  }, [contract]);

  // 监听事件
  useEffect(() => {
    if (!contract || !ethersReadonlyProvider) return;

    const filterValidated = contract.filters.ProofValidated();

    const handleValidated = () => {
      console.log("Proof validated, refreshing...");
      fetchValidatedProofs();
    };

    // 监听事件
    contract.on(filterValidated, handleValidated);

    // 初始加载
    fetchValidatedProofs();

    return () => {
      contract.off(filterValidated, handleValidated);
    };
  }, [contract, ethersReadonlyProvider, fetchValidatedProofs]);

  // 计算统计数据
  const stats = useMemo(() => {
    const approved = proofs.filter((s) => s.status === 1).length;
    const rejected = proofs.filter((s) => s.status === 2).length;
    const decrypted = proofs.filter((s) => s.decryptedScore !== undefined)
      .length;

    return {
      total: proofs.length,
      approved,
      rejected,
      decrypted,
    };
  }, [proofs]);

  return {
    proofs,
    stats,
    isLoading,
    error,
    fetchValidatedProofs,
  };
}

