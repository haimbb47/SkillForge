import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("授权验证者，使用账户:", deployer.address);

  // 合约地址
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  
  // 获取合约实例
  const SkillForge = await ethers.getContractAt("SkillForge", contractAddress);
  
  console.log("SkillForge 合约地址:", contractAddress);

  // 授权第一个账户为验证者
  const validatorAddress = deployer.address;
  console.log("正在授权验证者:", validatorAddress);
  
  const tx = await SkillForge.grantValidatorRole(validatorAddress, true);
  await tx.wait();

  console.log(`✅ 验证者权限已授予: ${validatorAddress}`);

  // 验证授权状态
  const isAuthorized = await SkillForge.authorizedValidators(validatorAddress);
  console.log(`验证授权状态: ${isAuthorized}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
