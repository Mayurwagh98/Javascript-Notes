### call

- call() method calls a function with a given this value and arguments provided one by one.
- when we want to use the same function with different objects then we can use call() method.

```js
const obj = {
  name: "mayur",
  lastname: "wagh",
};

const printFullName = function () {
  console.log(this.name + " " + this.lastname);
};

const obj2 = {
  name: "testing",
  lastname: "call",
};

printFullName.call(obj2);
```
