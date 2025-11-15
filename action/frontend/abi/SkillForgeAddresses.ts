// Auto-generated file - do not edit manually
export const SkillForgeAddresses = {
  31337: "0x5FbDB2315678afecb367f032d93F642f64180aa3", // localhost
  11155111: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "", // Sepolia
} as const;

export type ChainId = keyof typeof SkillForgeAddresses;

export function getSkillForgeAddress(chainId: number): string {
  if (chainId in SkillForgeAddresses) {
    return SkillForgeAddresses[chainId as ChainId];
  }
  throw new Error(`Unsupported chainId: ${chainId}`);
}
