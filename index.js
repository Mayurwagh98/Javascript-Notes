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
