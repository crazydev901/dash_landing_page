---
id: 6
title: "How to create a Dash wallet."
type: "code"
beforeCode: "Now, let's check the balance of the wallet. Replace the client options from before with these:"
---
```
const clientOpts = {
  network: "evonet",
  wallet: {
    mnemonic:
    // this time, we need to specify the mnemonic, replace with yours instead
      "replace this string with your twelve word mnemonic string from previous step",
  },
};