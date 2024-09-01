import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-foundry";
import dotenv from "dotenv";
dotenv.config();
//const { vars } = require("hardhat/config");

// npx hardhat vars set AVAX_PRIVATE_KEY 
// const AVAX_PRIVATE_KEY = vars.get("AVAX_PRIVATE_KEY");
const AVAX_PRIVATE_KEY = `${process.env.AVAX_PRIVATE_KEY}` || "";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  defaultNetwork: "hardhat",
  networks: {
    avaxFuji: {
      url: `https://api.avax.network/ext/bc/C/rpc`,
      accounts: [`0x${AVAX_PRIVATE_KEY}`],
    },
  },
};

export default config;
