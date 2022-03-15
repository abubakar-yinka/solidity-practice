const ethers = require("ethers");

const provider = ethers.getDefaultProvider("ropsten", {
  etherscan: process.env.ETHERSCAN_API_KEY,
  infura: process.env.INFURA_KEY,
});

module.exports = provider;
