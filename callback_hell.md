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

### Inversion of control

- as in the ablove example we can see that the next callback will be called once the current one is resolved

- due to this we are not sure when the next callback will be called
- this is called inversion of control
- this is the reason why we need to use promises