### currying using `bind` method

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

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(4);

let multiplyByTwo = multiply.bind(this, 2, 3);
multiplyByTwo(); // 6
```

### currying using `closure`

- here we are returning a function from the `multiply` function.
- so when we call the `multiply` function, the `x` argument will be stored in the `multiplyByTwo` function.
- and the `y` argument will be passed to the `multiplyByTwo` function.

```js
let multiply = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

let multiplyByTwo = multiply(2);
multiplyByTwo(5);
```
