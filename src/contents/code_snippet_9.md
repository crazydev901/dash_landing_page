---
id: 9
title: "How to send funds"
type: "code"
beforeCode: "Now that you have a balance, you can send some from one wallet to another. Let's send 1 eDASH back to the faucet's wallet. Add the following function:"
---
```
async function sendFunds(amountInDash) {
  const account = await client.wallet.getAccount();
  await account.isReady();

  try {
    // create a transaction, everything we need is the recipient's address and the amount to be sent in satoshis
    const transaction = account.createTransaction({
      recipient: "yNPbcFfabtNmmxKdGwhHomdYfVs6gikbPf", // Evonet faucet
      satoshis: Math.round(amountInDash * 100000000), // 100000000 satoshis = 1 Dash
    });

    // broadcast the transaction and get the transaction id
    const transactionId = await account.broadcastTransaction(transaction);  // you can send the id to the recipient so he can confirm that you have broadcasted the transaction
    console.log("Transaction broadcast!\nTransaction ID:", transactionId);
  } catch (e) {
    console.error("Something went wrong:", e);
  } finally {
    client.disconnect();
  }
}

sendFunds(37.5931);  // replace this number with however many DASH you have in your wallet to send everything back to the faucet.