### promises

- promises are objects that represent the eventual completion or failure of an asynchronous operation
- promises have three states: pending, fulfilled, rejected

```js
const github = "https://api.github.com/users/Mswagh98";

const user = fetch(github);

console.log(user);

user.then(function (data) {
  console.log(data);
});
```

- Ecommerce example

```js
const cart = ["shoes", "shirts", "pants"];

// callback function way
createOrder(cart, function (orderId) {
  proceedPayment(orderId);
});

// promise way
const promise = createOrder(cart);

promise.then(function (orderId) {
  proceedPayment(orderId);
});
```

### promise chaining

- promise chaining is a way to chain multiple promises together
- this is done by using the `then` method
- the `then` method returns a new promise
- `Note: Its important to return the new promise from the callback function in the then method or else the promise chain will be broken `

```js
const promise = createOrder(cart);

promise
  .then(function (orderId) {
    return proceedPayment(orderId);
  })
  .then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
  })
  .then(function (paymentInfo) {
    return updateWallte(paymentInfo);
  });
```

- new arrow function way

```js
const promise = createOrder(cart);
promise
  .then((orderId) => proceedPayment(orderId))
  .then((paymentInfo) => showOrderSummary(paymentInfo))
  .then((paymentInfo) => updateWallte(paymentInfo));
```
