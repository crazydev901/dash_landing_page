---
id: 12
title: "index.js file"
type: "code"
beforeCode: "Just in case you got stuck, here is the full index.js file how it should look like after you have followed this tutorial:"
---

```
// import dash
const Dash = require("dash");

// define client options
const clientOpts = {
  network: "evonet",
  wallet: {
    mnemonic:
      // this time, we need to specify the mnemonic, replace with yours instead
      "replace this string with your twelve word mnemonic string from previous step",
  },
};

// create a new client with the specified client options
const client = new Dash.Client(clientOpts);

async function createWallet() {
  try {
    // get the account
    const account = await client.wallet.getAccount();
    await account.isReady();

    // read the mnemonic from the client
    const mnemonic = client.wallet.exportWallet();
    console.log("Mnemonic:", mnemonic);

    // and get an unused address from the account
    const address = account.getUnusedAddress();
    console.log("Unused address:", address.address);
  } catch (e) {
    console.error("Something went wrong:", e);
  } finally {
    // always make sure to disconnect the client
    client.disconnect();
  }
}

async function checkAccountBalance() {
  const account = await client.wallet.getAccount();
  await account.isReady();

  try {
    const balance = {
      confirmed: account.getConfirmedBalance(false),
      unconfirmed: account.getUnconfirmedBalance(false),
      total: account.getTotalBalance(false),
    };
    console.log(balance);
  } catch (e) {
    console.error("Something went wrong:", e);
  } finally {
    client.disconnect();
  }
}

async function sendFunds() {
  const account = await client.wallet.getAccount();
  await account.isReady();

  try {
    // create a transaction, everything we need is the recipient and the amount in satoshis
    const transaction = account.createTransaction({
      recipient: "yNPbcFfabtNmmxKdGwhHomdYfVs6gikbPf", // Evonet faucet
      satoshis: 235.6932 * 100000000, // 100000000 satoshis = 1 Dash
    });

    // broadcast the transaction and get the transaction id
    const transactionId = await account.broadcastTransaction(transaction);
    console.log("Transaction broadcast!\nTransaction ID:", transactionId);
  } catch (e) {
    console.error("Something went wrong:", e);
  } finally {
    client.disconnect();
  }
}

// createWallet();

// checkAccountBalance();

// sendFunds();