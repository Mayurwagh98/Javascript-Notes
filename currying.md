### crrying using `bind` method

- here we are binding the `this` keyword to the `multiplyByTwo` function.
- so when we call the `multiplyByTwo` function, the `this` keyword will be bound to the `multiply` function.
- so we can pass the `x` argument to the `multiplyByTwo` function.
- and the `y` argument will be passed to the `multiply` function.

```js
let multiply = function (x, y) {
  console.log(x * y);
};

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(3);
```
