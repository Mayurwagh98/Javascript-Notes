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
