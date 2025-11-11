import "@fhevm/hardhat-plugin";
import "@nomicfoundation/hardhat-chai-matchers";
import "@nomicfoundation/hardhat-ethers";
import "@nomicfoundation/hardhat-verify";
import "@typechain/hardhat";
import "hardhat-deploy";
import "hardhat-gas-reporter";
import type { HardhatUserConfig } from "hardhat/config";
import { vars } from "hardhat/config";

const MNEMONIC: string = vars.get("MNEMONIC", "");
const INFURA_API_KEY: string = vars.get("INFURA_API_KEY", "");
const PRIVATE_KEY_RAW: string = vars.get("PRIVATE_KEY", "");
const SEPOLIA_RPC_URL: string = vars.get("SEPOLIA_RPC_URL", "");
const PRIVATE_KEY = PRIVATE_KEY_RAW
  ? (PRIVATE_KEY_RAW.startsWith("0x") ? PRIVATE_KEY_RAW : `0x${PRIVATE_KEY_RAW}`)
  : "";

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  namedAccounts: {
    deployer: 0,
  },
  etherscan: {
    apiKey: {
      sepolia: vars.get("ETHERSCAN_API_KEY", ""),
    },
  },
  gasReporter: {
    currency: "USD",
    enabled: process.env.REPORT_GAS ? true : false,
  },
  networks: {
    hardhat: {
      chainId: 31337,
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      chainId: 31337,
    },
    sepolia: {
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : undefined,
      chainId: 11155111,
      url: SEPOLIA_RPC_URL || (INFURA_API_KEY ? `https://sepolia.infura.io/v3/${INFURA_API_KEY}` : "https://ethereum-sepolia-rpc.publicnode.com"),
    },
  },
  paths: {
    artifacts: "./artifacts",
    cache: "./cache",
    sources: "./contracts",
    tests: "./test",
  },
  solidity: {
    version: "0.8.27",
    settings: {
      metadata: {
        bytecodeHash: "none",
      },
      optimizer: {
        enabled: true,
        runs: 800,
      },
      evmVersion: "cancun",
    },
  },
  typechain: {
    outDir: "types",
    target: "ethers-v6",
  },
};

export default config;


