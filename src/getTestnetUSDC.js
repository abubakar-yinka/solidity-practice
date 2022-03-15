require("dotenv").config();
const ethers = require("ethers");
const wallet = require("./wallet");
const provider = require("./provider");

// NOTE: All methods that interact with the network are asynchronous in nature and return a Promise, so we are using JavaScript’s await expression.
async function main() {
  const account = wallet.connect(provider);

  // Instantate a contract object with the interface of the function we are interested in, gimmeSome, and point it at the address of the testnet USDC contract: 0x68ec⋯69c4.
  const usdc = new ethers.Contract(
    "0x68ec573C119826db2eaEA1Efbfc2970cDaC869c4",
    ["function gimmeSome() external"],
    account,
  );
  // We are giving it 20 Giga-wei of gas price, which should speed up the transaction.
  const tx = await usdc.gimmeSome({gasPrice: 20e9});

  // Transaction hash is a unique identifier of your transaction that can be used to track the progress.
  console.log(`Transaction hash: ${tx.hash}`);

  // Wait until the transaction is confirmed.
  const receipt = await tx.wait();
  console.log(`Transaction confirmed in block ${receipt.blockNumber}`);
  console.log(`Gas used: ${receipt.gasUsed.toString()}`);
}

main();
