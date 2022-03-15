# Solidity-tutorial

I learnt how to generate an account/wallet, query balance, transfer tokens(Test ETH & USDC), and call external smart contract functions on the ethereum blockchain i.e both read-only functions and read-write functions where the former may result in a change in the data stored in the blockchain, and the latter purely reads, but never writes...

## About Gas and Mining

Ethereum is a decentralized network of thousands of computers around the world, and they don’t exactly do work for free. To perform any state change on the blockchain such as storing and updating data, you have to pay the network operators a transaction fee in Ether (ETH), also known as “gas” on Ethereum. This, along with the bonus reward the operators get for adding new blocks to the chain, is what incentivizes them to keep their computers up and running. This process is called “mining” and the network operators are called “miners”. We will be revisiting this later in this tutorial (Gas, Gas Price and Gas Limit).

## The higher the gas fee we pay, the faster the Tx.

We can auction off time on a computer, and the more you are willing to pay for each compute instruction you run on that computer, the more the network operators (miners) will likely be giving you the time. This sure isn’t perfect, as it could have an effect where only the rich are able to have the privilege of using this system. However it is the least bad solution we have until the system is made much more scalable and can accommodate much more transactions.

## Making a Transaction to Call a Smart Contract Function

Read-only functions can be called without creating a transaction and therefore without a transaction fee, unless called as part of a read-write function. Read-write functions on the other hand must be called inside a transaction, and the transaction fee (gas) must be paid. Invoking the ```gimmeSome``` function results in a change in the USDC balances stored in the blockchain, therefore it has to be called inside a transaction.

Features:

- Truffle
- Ganache
- Auto formatting
- Code linting

## Setup

Requirements:

- Node >= v12
- Yarn

```
$ npm i -g yarn       # Install yarn if you don't already have it
$ yarn install        # Install dependencies
```

## Linting and Formatting

To check code for problems:

```
$ yarn lint           # Check JavaScript code
$ yarn solhint        # Check Solidity code
```

To auto-format code:

```
$ yarn fmt
```

## Testing

First, make sure Ganache is running.

```
$ yarn ganache
```

Run all tests:

```
$ yarn test
```

To run tests in a specific file, run:

```
$ yarn test [path/to/file]
```

## Deploying

First, make sure you have your mnemonic (BIP39 recovery phrase) and an
[INFURA](https://infura.io/) API key.

```
$ MNEMONIC="your mnemonic" INFURA_API_KEY="yourAPIKey" truffle deploy --network=ropsten
```

---

MIT License
