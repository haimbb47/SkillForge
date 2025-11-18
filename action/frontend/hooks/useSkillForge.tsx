"use client";

import { ethers } from "ethers";
import { useCallback, useMemo, useState } from "react";
import { FhevmInstance } from "@/fhevm/fhevmTypes";
import { FhevmDecryptionSignature } from "@/fhevm/FhevmDecryptionSignature";
import { GenericStringStorage } from "@/fhevm/GenericStringStorage";

// 辅助函数：将handle转换为bytes32格式
function convertHandleToBytes32(handle: any): string {
  if (Array.isArray(handle)) {
    const uint8Array = new Uint8Array(handle);
    const hexString = ethers.hexlify(uint8Array);
    return ethers.zeroPadValue(hexString, 32);
  } else if (handle instanceof Uint8Array) {
    const hexString = ethers.hexlify(handle);
    return ethers.zeroPadValue(hexString, 32);
  } else if (typeof handle === 'string') {
    let hexString = handle;
    if (!hexString.startsWith('0x')) {
      hexString = '0x' + hexString;
    }
    if (hexString.length < 66) {
      return ethers.zeroPadValue(hexString, 32);
    }
    return hexString;
  }
  throw new Error(`Unsupported handle type: ${typeof handle}, value: ${JSON.stringify(handle)}`);
}

// SkillForge 合约 ABI
const SKILLFORGE_ABI = [
  "function forgeCourse(string courseCID, bytes32 encryptedTotalChallenges, bytes inputProof) returns (uint256)",
  "function submitProof(uint256 courseId, uint256 challengeId, string proofCID, bytes32 encryptedScore, bytes inputProof) returns (uint256)",
  "function validateProof(uint256 proofId, uint8 status, bytes32 newEncryptedScore, bytes inputProof)",
  "function claimBadge(uint256 courseId, string badgeCID, bytes32 encryptedTotalScore, bytes inputProof) returns (uint256)",
  "function getCourse(uint256 courseId) view returns (address creator, string courseCID, bool active, uint256 forgedAt)",
  "function getProof(uint256 proofId) view returns (uint256 courseId, uint256 challengeId, address learner, string proofCID, uint8 status, address validator, uint256 submittedAt)",
  "function getProofEncryptedScore(uint256 proofId) view returns (bytes32 encryptedScoreHandle)",
  "function getBadge(uint256 badgeId) view returns (uint256 courseId, address earner, string badgeCID, uint256 claimedAt)",
  "function getBadgeEncryptedScore(uint256 badgeId) view returns (bytes32 encryptedTotalScoreHandle)",
  "function nextProofId() view returns (uint256)",
  "function nextBadgeId() view returns (uint256)",
  "function grantValidatorRole(address validator, bool authorized)",
  "function authorizedValidators(address) view returns (bool)",
  "event CourseForged(uint256 indexed courseId, address indexed creator, string courseCID)",
  "event ProofSubmitted(uint256 indexed proofId, uint256 indexed courseId, address indexed learner, string proofCID)",
  "event ProofValidated(uint256 indexed proofId, address indexed validator, uint8 status)",
  "event BadgeClaimed(uint256 indexed badgeId, uint256 indexed courseId, address indexed earner, string badgeCID)",
] as const;

export function useSkillForge(parameters: {
  instance: FhevmInstance | undefined;
  fhevmDecryptionSignatureStorage: GenericStringStorage;
  contractAddress: `0x${string}` | undefined;
  ethersSigner: ethers.JsonRpcSigner | undefined;
  ethersReadonlyProvider: ethers.ContractRunner | undefined;
  chainId: number | undefined;
}) {
  const {
    instance,
    fhevmDecryptionSignatureStorage,
    contractAddress,
    ethersSigner,
    ethersReadonlyProvider,
    chainId,
  } = parameters;

  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const contract = useMemo(() => {
    if (!contractAddress || !ethersReadonlyProvider) return undefined;
    return new ethers.Contract(contractAddress, SKILLFORGE_ABI, ethersReadonlyProvider);
  }, [contractAddress, ethersReadonlyProvider]);

  const contractWithSigner = useMemo(() => {
    if (!contractAddress || !ethersSigner) return undefined;
    return new ethers.Contract(contractAddress, SKILLFORGE_ABI, ethersSigner);
  }, [contractAddress, ethersSigner]);

  // 锻造课程
  const forgeCourse = useCallback(
    async (courseCID: string, totalChallenges: number) => {
      if (!instance || !contractWithSigner || !ethersSigner) {
        setMessage("FHEVM实例或合约未就绪");
        return;
      }

      setIsLoading(true);
      setMessage("⚡ 正在加密课程数据...");

      try {
        const input = instance.createEncryptedInput(
          contractAddress!,
          await ethersSigner.getAddress()
        );
        input.add32(BigInt(totalChallenges));

        const enc = await input.encrypt();

        setMessage("🔨 正在提交锻造交易...");
        
        const handle = convertHandleToBytes32(enc.handles[0]);

        const tx = await contractWithSigner.forgeCourse(
          courseCID,
          handle,
          enc.inputProof,
          { gasLimit: 10000000 }
        );

        setMessage(`⏳ 交易已发送: ${tx.hash}`);
        const receipt = await tx.wait();
        setMessage(`✅ 课程锻造成功！状态: ${receipt?.status}`);
      } catch (error: any) {
        console.error("ForgeCourse error:", error);
        const errorMsg = error?.reason || error?.message || "未知错误";
        setMessage(`❌ 错误: ${errorMsg}`);
      } finally {
        setIsLoading(false);
      }
    },
    [instance, contractWithSigner, contractAddress, ethersSigner]
  );

  // 提交证明
  const submitProof = useCallback(
    async (
      courseId: number,
      challengeId: number,
      proofCID: string,
      score: number
    ) => {
      if (!instance || !contractWithSigner || !ethersSigner) {
        setMessage("FHEVM实例或合约未就绪");
        return;
      }

      setIsLoading(true);
      setMessage("⚡ 正在加密分数...");

      try {
        const input = instance.createEncryptedInput(
          contractAddress!,
          await ethersSigner.getAddress()
        );
        input.add32(BigInt(score));

        const enc = await input.encrypt();

        setMessage("⚔️ 正在提交证明...");
        
        const handle = convertHandleToBytes32(enc.handles[0]);

        const tx = await contractWithSigner.submitProof(
          courseId,
          challengeId,
          proofCID,
          handle,
          enc.inputProof,
          { gasLimit: 10000000 }
        );

        setMessage(`⏳ 交易已发送: ${tx.hash}`);
        const receipt = await tx.wait();
        setMessage(`✅ 证明提交成功！状态: ${receipt?.status}`);
      } catch (error: any) {
        console.error("SubmitProof error:", error);
        const errorMsg = error?.reason || error?.message || "未知错误";
        setMessage(`❌ 错误: ${errorMsg}`);
      } finally {
        setIsLoading(false);
      }
    },
    [instance, contractWithSigner, contractAddress, ethersSigner]
  );

  // 验证证明
  const validateProof = useCallback(
    async (proofId: number, status: number, newScore: number) => {
      if (!instance || !contractWithSigner || !ethersSigner) {
        setMessage("FHEVM实例或合约未就绪");
        return;
      }

      setIsLoading(true);
      setMessage("🛡️ 检查证明状态...");

      try {
        // 先检查证明状态
        const proof = await contractWithSigner.getProof(proofId);
        const proofStatus = Number(proof[4]); // status是第5个返回值
        
        if (proofStatus !== 0) {
          throw new Error(`证明已被验证（当前状态: ${proofStatus === 1 ? '已通过' : '已拒绝'}）`);
        }

        setMessage("⚡ 加密新分数...");

        const input = instance.createEncryptedInput(
          contractAddress!,
          await ethersSigner.getAddress()
        );
        input.add32(BigInt(newScore));

        const enc = await input.encrypt();

        setMessage("🛡️ 提交验证交易...");
        
        const handle = convertHandleToBytes32(enc.handles[0]);

        const tx = await contractWithSigner.validateProof(
          proofId,
          status,
          handle,
          enc.inputProof,
          { gasLimit: 10000000 }
        );

        setMessage(`⏳ 交易已发送: ${tx.hash}`);
        const receipt = await tx.wait();
        setMessage(`✅ 验证成功！状态: ${receipt?.status === 1 ? '成功' : '失败'}`);
      } catch (error: any) {
        console.error("ValidateProof error:", error);
        let errorMsg = "未知错误";
        
        if (error?.reason) {
          errorMsg = error.reason;
        } else if (error?.message) {
          errorMsg = error.message;
          if (errorMsg.includes("Not authorized")) {
            errorMsg = "错误：您未被授权为验证者，请先授权";
          } else if (errorMsg.includes("Already validated")) {
            errorMsg = "错误：该证明已被验证";
          } else if (errorMsg.includes("Invalid status")) {
            errorMsg = "错误：无效的验证状态";
          }
        }
        
        setMessage(`❌ 验证失败: ${errorMsg}`);
      } finally {
        setIsLoading(false);
      }
    },
    [instance, contractWithSigner, contractAddress, ethersSigner]
  );

  // 解密分数
  const decryptScore = useCallback(
    async (handle: string) => {
      if (!instance || !ethersSigner || !contractAddress) {
        setMessage("FHEVM实例未就绪");
        return null;
      }

      setIsLoading(true);
      setMessage("🔓 正在解密分数...");

      try {
        const sig = await FhevmDecryptionSignature.loadOrSign(
          instance,
          [contractAddress],
          ethersSigner,
          fhevmDecryptionSignatureStorage
        );

        if (!sig) {
          setMessage("无法构建解密签名");
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

        setMessage("✅ 解密完成！");
        return (res as any)[handle];
      } catch (error: any) {
        setMessage(`❌ 解密错误: ${error.message}`);
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    [instance, ethersSigner, contractAddress, fhevmDecryptionSignatureStorage]
  );

  // 授权验证者
  const grantValidator = useCallback(
    async (validatorAddress: string) => {
      if (!contractWithSigner) {
        setMessage("合约未就绪");
        return false;
      }

      setIsLoading(true);
      setMessage("⚡ 正在授权验证者...");

      try {
        const tx = await contractWithSigner.grantValidatorRole(
          validatorAddress,
          true,
          { gasLimit: 100000 }
        );

        setMessage(`⏳ 交易已发送: ${tx.hash}`);
        const receipt = await tx.wait();
        setMessage(`✅ 验证者授权成功！状态: ${receipt?.status}`);
        return true;
      } catch (error: any) {
        console.error("GrantValidator error:", error);
        const errorMsg = error?.reason || error?.message || "未知错误";
        setMessage(`❌ 错误: ${errorMsg}`);
        return false;
      } finally {
        setIsLoading(false);
      }
    },
    [contractWithSigner]
  );

  // 检查验证者授权状态
  const checkValidatorAuth = useCallback(
    async (validatorAddress: string): Promise<boolean> => {
      if (!contract) return false;

      try {
        const isAuthorized = await contract.authorizedValidators(validatorAddress);
        return isAuthorized;
      } catch (error) {
        console.error("CheckValidatorAuth error:", error);
        return false;
      }
    },
    [contract]
  );

  // 领取徽章
  const claimBadge = useCallback(
    async (courseId: number, badgeCID: string, totalScore: number) => {
      if (!instance || !contractWithSigner || !ethersSigner) {
        setMessage("FHEVM实例或合约未就绪");
        return;
      }

      setIsLoading(true);
      setMessage("⚡ 加密总分...");

      try {
        const input = instance.createEncryptedInput(
          contractAddress!,
          await ethersSigner.getAddress()
        );
        input.add64(BigInt(totalScore));

        const enc = await input.encrypt();

        setMessage("🏅 提交领取交易...");
        
        const handle = convertHandleToBytes32(enc.handles[0]);

        const tx = await contractWithSigner.claimBadge(
          courseId,
          badgeCID,
          handle,
          enc.inputProof,
          { gasLimit: 5000000 }
        );

        setMessage(`⏳ 交易已发送: ${tx.hash}`);
        const receipt = await tx.wait();
        setMessage(`✅ 徽章领取成功！状态: ${receipt?.status === 1 ? '成功' : '失败'}`);
        
        setTimeout(() => {
          window.location.href = "/badges";
        }, 2000);
      } catch (error: any) {
        console.error("ClaimBadge error:", error);
        const errorMsg = error?.reason || error?.message || "未知错误";
        setMessage(`❌ 领取失败: ${errorMsg}`);
      } finally {
        setIsLoading(false);
      }
    },
    [instance, contractWithSigner, contractAddress, ethersSigner]
  );

  return {
    contract,
    contractWithSigner,
    forgeCourse,
    submitProof,
    validateProof,
    claimBadge,
    decryptScore,
    grantValidator,
    checkValidatorAuth,
    message,
    isLoading,
  };
}

