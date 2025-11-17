import { writeFile } from "fs/promises";
import { readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  try {
    // 读取合约ABI
    const contractPath = path.join(
      __dirname,
      "../../contracts/deployments/localhost/SkillForge.json"
    );

    const contractData = JSON.parse(readFileSync(contractPath, "utf-8"));

    // 生成ABI文件
    const abiContent = `// Auto-generated file - do not edit manually
export const SkillForgeABI = ${JSON.stringify(contractData.abi, null, 2)} as const;
`;

    const abiPath = path.join(__dirname, "../abi/SkillForgeABI.ts");
    await writeFile(abiPath, abiContent);

    // 生成地址文件
    const addressContent = `// Auto-generated file - do not edit manually
export const SkillForgeAddresses = {
  31337: "${contractData.address}", // localhost
  11155111: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "", // Sepolia
} as const;

export type ChainId = keyof typeof SkillForgeAddresses;

export function getSkillForgeAddress(chainId: number): string {
  if (chainId in SkillForgeAddresses) {
    return SkillForgeAddresses[chainId as ChainId];
  }
  throw new Error(\`Unsupported chainId: \${chainId}\`);
}
`;

    const addressPath = path.join(__dirname, "../abi/SkillForgeAddresses.ts");
    await writeFile(addressPath, addressContent);

    console.log("✅ ABI and addresses generated successfully!");
    console.log(`   Contract address: ${contractData.address}`);
  } catch (error) {
    console.error("❌ Error generating ABI:", error.message);
    process.exit(1);
  }
}

main();


