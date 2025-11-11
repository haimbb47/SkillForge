import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  const deployedSkillForge = await deploy("SkillForge", {
    from: deployer,
    log: true,
  });

  console.log(`SkillForge contract deployed at: ${deployedSkillForge.address}`);
};

export default func;
func.id = "deploy_skillforge";
func.tags = ["SkillForge"];


