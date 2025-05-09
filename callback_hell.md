### callback hell

- in the below example we can see that we are calling next callback function once the current one is resolved

- this sequence of calling callback one after another is callback hell

```js
const cart = ["shoes", "shirts", "pants"];

api.createOrder(cart, function () {
  api.proceedPayment(function () {
    api.showOrderSummary(function () {
      api.updateWallet();
    });
  });
});
```
