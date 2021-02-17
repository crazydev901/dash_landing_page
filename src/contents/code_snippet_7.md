---
id: 7
title: "How to check the balance of your wallet"
type: "code"
beforeCode: "Add a account balance check function."
---
```
async function checkAccountBalance() {
  const account = await client.wallet.getAccount();
  await account.isReady();

  try {
    // read the balance from the account
    const balance = {
      confirmed: account.getConfirmedBalance(false/**/),
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

checkAccountBalance();