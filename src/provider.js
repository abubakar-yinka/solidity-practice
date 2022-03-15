const ethers = require("ethers");

const provider = ethers.getDefaultProvider("ropsten", {
  infura: process.env.INFURA_KEY,
});

module.exports = provider;
