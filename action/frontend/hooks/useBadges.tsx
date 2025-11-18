"use client";

import { ethers } from "ethers";
import { useCallback, useEffect, useMemo, useState } from "react";
import { FhevmInstance } from "@/fhevm/fhevmTypes";
import { FhevmDecryptionSignature } from "@/fhevm/FhevmDecryptionSignature";
import { GenericStringStorage } from "@/fhevm/GenericStringStorage";

const SKILLFORGE_ABI = [
  "function getBadge(uint256 badgeId) view returns (uint256 courseId, address earner, string badgeCID, uint256 claimedAt)",
  "function getBadgeEncryptedScore(uint256 badgeId) view returns (bytes32 encryptedTotalScoreHandle)",
  "function getCourse(uint256 courseId) view returns (address creator, string courseCID, bool active, uint256 forgedAt)",
  "function nextBadgeId() view returns (uint256)",
  "event BadgeClaimed(uint256 indexed badgeId, uint256 indexed courseId, address indexed earner, string badgeCID)",
] as const;

export type Badge = {
  id: number;
  courseId: number;
  earner: string;
  badgeCID: string;
  claimedAt: number;
  decryptedScore?: bigint; // 解密后的最终分数（可选）
  courseCID?: string; // 课程的IPFS CID（可选）
};

export function useBadges(parameters: {
  contractAddress: `0x${string}` | undefined;
  ethersReadonlyProvider: ethers.ContractRunner | undefined;
  instance: FhevmInstance | undefined;
  ethersSigner: ethers.JsonRpcSigner | undefined;
  fhevmDecryptionSignatureStorage: GenericStringStorage;
  chainId: number | undefined;
  userAddress?: string; // 可选：只获取特定用户的证书
}) {
  const {
    contractAddress,
    ethersReadonlyProvider,
    instance,
    ethersSigner,
    fhevmDecryptionSignatureStorage,
    chainId,
    userAddress,
  } = parameters;

  const [badges, setBadges] = useState<Badge[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const contract = useMemo(() => {
    if (!contractAddress || !ethersReadonlyProvider) return undefined;
    return new ethers.Contract(contractAddress, SKILLFORGE_ABI, ethersReadonlyProvider);
  }, [contractAddress, ethersReadonlyProvider]);

  // 获取所有证书
  const fetchBadges = useCallback(async () => {
    if (!contract) {
      setBadges([]);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const allBadges: Badge[] = [];
      
      try {
        // 通过事件获取所有BadgeClaimed事件
        const filter = contract.filters.BadgeClaimed();
        const events = await contract.queryFilter(filter);
        
        // 从事件中提取badge IDs
        const badgeIds = new Set<number>();
        events.forEach((event) => {
          const ev: any = event;
          if (ev.args && ev.args.badgeId) {
            const badgeId = Number(ev.args.badgeId);
            const earner = ev.args.earner;
            // 如果指定了userAddress，只获取该用户的证书
            if (!userAddress || earner.toLowerCase() === userAddress.toLowerCase()) {
              badgeIds.add(badgeId);
            }
          }
        });

        // 并行获取每个证书的详情
        const badgePromises = Array.from(badgeIds).map(async (id) => {
          try {
            const [courseId, earner, badgeCID, claimedAt] = await contract.getBadge(id);
            
            // 再次检查用户地址（双重检查）
            if (userAddress && earner.toLowerCase() !== userAddress.toLowerCase()) {
              return null;
            }

            // 获取路径信息
            let courseCID = "";
            try {
              const [creator, pCID, active, createdAt] = await contract.getCourse(Number(courseId));
              courseCID = pCID;
            } catch (e) {
              console.log(`Error fetching path ${courseId}:`, e);
            }

            return {
              id,
              courseId: Number(courseId),
              earner,
              badgeCID,
              claimedAt: Number(claimedAt),
              courseCID,
            } as Badge;
          } catch (e) {
            console.log(`Error fetching badge ${id}:`, e);
            return null;
          }
        });

        const results = await Promise.all(badgePromises);
        results.forEach((badge) => {
          if (badge) {
            allBadges.push(badge);
          }
        });
      } catch (e) {
        console.error("Error querying events:", e);
        // Fallback: 如果事件查询失败，尝试使用nextBadgeId
        try {
          const nextId = await contract.nextBadgeId();
          const totalBadges = Number(nextId);
          
          for (let i = 1; i < totalBadges; i++) {
            try {
              const [courseId, earner, badgeCID, claimedAt] = await contract.getBadge(i);
              
              // 如果指定了userAddress，只获取该用户的证书
              if (userAddress && earner.toLowerCase() !== userAddress.toLowerCase()) {
                continue;
              }

              // 获取路径信息
              let courseCID = "";
              try {
                const [creator, pCID, active, createdAt] = await contract.getCourse(Number(courseId));
                courseCID = pCID;
              } catch (e) {
                console.log(`Error fetching path ${courseId}:`, e);
              }

              allBadges.push({
                id: i,
                courseId: Number(courseId),
                earner,
                badgeCID,
                claimedAt: Number(claimedAt),
                courseCID,
              });
            } catch (e) {
              // 跳过不存在的证书
            }
          }
        } catch (fallbackError) {
          console.error("Fallback method also failed:", fallbackError);
        }
      }

      // 按铸造时间倒序排列
      allBadges.sort((a, b) => b.claimedAt - a.claimedAt);

      setBadges(allBadges);
    } catch (e: any) {
      console.error("Error fetching badges:", e);
      setError(e.message || "Failed to fetch badges");
    } finally {
      setIsLoading(false);
    }
  }, [contract, userAddress]);

  // 获取单个证书详情
  const fetchBadge = useCallback(
    async (badgeId: number): Promise<Badge | null> => {
      if (!contract) return null;

      try {
        const [courseId, earner, badgeCID, claimedAt] = await contract.getBadge(badgeId);

        // 获取路径信息
        let courseCID = "";
        try {
          const [creator, pCID, active, createdAt] = await contract.getCourse(Number(courseId));
          courseCID = pCID;
        } catch (e) {
          console.log(`Error fetching path ${courseId}:`, e);
        }

        return {
          id: badgeId,
          courseId: Number(courseId),
          earner,
          badgeCID,
          claimedAt: Number(claimedAt),
          courseCID,
        };
      } catch (e: any) {
        console.error(`Error fetching badge ${badgeId}:`, e);
        return null;
      }
    },
    [contract]
  );

  // 解密证书分数
  const decryptBadgeScore = useCallback(
    async (badgeId: number): Promise<bigint | null> => {
      if (!instance || !ethersSigner || !contractAddress || !contract) {
        return null;
      }

      try {
        // 获取证书的加密分数handle
        const encryptedScoreHandle = await contract.getBadgeEncryptedScore(badgeId);
        
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
        console.error("Error decrypting badge score:", e);
        return null;
      }
    },
    [instance, ethersSigner, contractAddress, fhevmDecryptionSignatureStorage, contract]
  );

  // 为证书解密分数并更新状态
  const decryptAndUpdateBadge = useCallback(
    async (badgeId: number) => {
      const score = await decryptBadgeScore(badgeId);
      if (score !== null) {
        setBadges((prev) =>
          prev.map((badge) =>
            badge.id === badgeId ? { ...badge, decryptedScore: score } : badge
          )
        );
      }
      return score;
    },
    [decryptBadgeScore]
  );

  // 监听事件
  useEffect(() => {
    if (!contract || !ethersReadonlyProvider) return;

    const filter = contract.filters.BadgeClaimed();

    const handleClaimed = () => {
      console.log("New badge claimed, refreshing...");
      fetchBadges();
    };

    // 监听事件
    contract.on(filter, handleClaimed);

    // 初始加载
    fetchBadges();

    return () => {
      contract.off(filter, handleClaimed);
    };
  }, [contract, ethersReadonlyProvider, fetchBadges]);

  return {
    badges,
    isLoading,
    error,
    fetchBadges,
    fetchBadge,
    decryptBadgeScore,
    decryptAndUpdateBadge,
  };
}

