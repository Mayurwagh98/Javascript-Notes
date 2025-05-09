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
2