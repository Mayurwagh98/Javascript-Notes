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

### creating our own promise

- if promise is resolved, we call the `resolve` function
- if promise is rejected, we call the `reject` function
- `Note: Its important to return the new promise from the callback function in the then method or else the promise chain will be broken `
- here `catch` is being attached at the end of the promise chain
- so if any error occurs the chain will be broken and the `catch` method will be called

```js
const cart = ["shoes", "shirts", "pants"];

createOrder()
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .then((orderId) => {
    return processPayment(orderId);
  })
  .then((paymentInfo) => {
    console.log(paymentInfo);
  })
  .catch((err) => {
    console.log(err.message);
  });

function createOrder() {
  const promise = new Promise((resolve, reject) => {
    if (!validCart(cart)) {
      const err = new Error("cart is empty");
      reject(err);
    } else {
      const orderId = 123;
      resolve(orderId);
    }
  });
  return promise;
}
function processPayment(orderId) {
  const promise = new Promise((resolve, reject) => {
    if (!orderId) {
      const err = new Error("orderId is empty");
      reject(err);
    } else {
      resolve("payment done");
    }
  });
  return promise;
}

function validCart(cart) {
  return true;
}
```
<img width="508" alt="Screenshot 2025-05-10 at 02 59 25" src="https://github.com/user-attachments/assets/ae14ce42-f1cb-4f04-bffd-da27dd5b2aaf" />


- if we want that rest of the chain to run even if one of the promises is rejected we can use the `catch` method as below

```js
const cart = ["shoes", "shirts", "pants"];

createOrder()
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .then((orderId) => {
    return processPayment(orderId);
  })
  .then((paymentInfo) => {
    console.log(paymentInfo);
  })
  .catch((err) => {
    console.log(err.message);
  })
  .then(() => {
    console.log("this will be called even if any chain breaks");
  });

function createOrder() {
  const promise = new Promise((resolve, reject) => {
    if (!validCart(cart)) {
      const err = new Error("cart is empty");
      reject(err);
    } else {
      const orderId = 123;
      resolve(orderId);
    }
  });
  return promise;
}
function processPayment(orderId) {
  const promise = new Promise((resolve, reject) => {
    if (!orderId) {
      const err = new Error("orderId is empty");
      reject(err);
    } else {
      resolve("payment done");
    }
  });
  return promise;
}

function validCart(cart) {
  return false;
}
```
<img width="573" alt="Screenshot 2025-05-10 at 03 00 06" src="https://github.com/user-attachments/assets/16529c36-68fb-40b8-9954-506e62ab76c7" />

