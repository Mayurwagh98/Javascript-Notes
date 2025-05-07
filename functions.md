### function statement / function declaration

```js
function a() {
  console.log("a");
}
```

### function expression

```js
var b = function () {
  console.log("b");
};
```

### basic difference between function statment and function expression is hoisting

```js
a(); // 10

b(); // refrence error: b is not a function

function a() {
  console.log(10);
}

var b = function () {
  console.log("b");
};
```

### anonymous function

- anonymous function: which doesn't have any name
- use case: when we want to pass the function as a value we use anonymous function

```js
var anonymousFun = function () {
  console.log("anonymous function");
};
```

### named function expression

- function which has name

```js
var b = function xyz() {
  console.log("named function");
};
b();
```

- corner case: we can't envoke `xyz()`
- it will throw an `ReferenceError: xyz is not defined
- this happens because `xyz` is not declared in a global scope, it's assigned to `b`

### difference between parameters and arguments

- values received by functions are parameters
- values passed to the functions are arguments

```js
function xyz(parameter1, parameter2) {
  console.log("a");
}

xyz(argument1, argument2);
```

### first class functions / first class citizens

- ability to pass functions as values or return the functions is known as first class functions or assign functions to variables
- passing function as value

```js
var b = function () {
  console.log("b");
};

b(function () {});
```

- returning function

```js
var b = function () {
  return function a() {
    console.log("a");
  };
};

b();
```
