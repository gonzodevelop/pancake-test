import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-verify";
import "hardhat-gas-reporter";
import { ZeroHash } from "ethers";
import dotenv from "dotenv";

dotenv.config();

const ETHEREUM_RPC_URL = process.env.ETHEREUM_RPC_URL 
const ETHEREUM_PRIVATE_KEY = process.env.ETHEREUM_PRIVATE_KEY ?? "";
const ETHEREUM_ETHERSCAN_API_KEY = process.env.ETHEREUM_ETHERSCAN_API_KEY ?? "";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
        {
            version: "0.8.28",
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 200,
                },
            },
        },
    ],
},
  networks: {
    hardhat: {
      forking: {
        url: ETHEREUM_RPC_URL,
        blockNumber: 22853622 
      }
    },
    mainnet: {
      url: ETHEREUM_RPC_URL,
      accounts: [ETHEREUM_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      mainnet: ETHEREUM_ETHERSCAN_API_KEY!,
    },
  },
};

export default config;

