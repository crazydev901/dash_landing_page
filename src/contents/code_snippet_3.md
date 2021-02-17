---
id: 3
title: "How to create a Dash wallet."
type: "code"
beforeCode: "The first thing we want to do is to create a new wallet. Here is how:"
afterCode: "When creating a new wallet, always make sure to save the mnemonic, otherwise you will not be able to access your wallet again."
---
```
// import dash
const Dash = require("dash");

// define client options
const clientOpts = {
    network: "evonet",  // as long as network is set to 'evonet', all operations
                        // performed with the client are only executed on evonet
                        // with eDash. eDash has no value.
  wallet: {
    mnemonic: null,   // this line tells the network
                      // that we want to create a new wallet
  }
};

// create a new client with the specified client options
const client = new Dash.Client(clientOpts);

// create a wallet creation function
async function createWallet() {
  try {
    // get the account
    const account = await client.wallet.getAccount();
    await account.isReady();

    // read the mnemonic from the client
    const mnemonic = client.wallet.exportWallet();
    console.log('Mnemonic:', mnemonic);

    // and get an unused address from the account
    const address = account.getUnusedAddress();
    console.log('Unused address:', address.address);

  } catch (e) {
    console.error("Something went wrong:", e);
  } finally {
    // always make sure to disconnect the client
    client.disconnect();
  }
}

createWallet();