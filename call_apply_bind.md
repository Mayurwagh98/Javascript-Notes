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

- we can pass arguments to call() method as well.

```js
const obj = {
  name: "mayur",
  lastname: "wagh",
};

const printFullName = function (city, state) {
  console.log(
    this.name + " " + this.lastname + "lives in " + city + " " + state
  );
};

const obj2 = {
  name: "testing",
  lastname: "call",
};

printFullName.call(obj, "nasik", "maharashtra");
printFullName.call(obj2, "mumbai", "delhi");
```

### apply

- apply() method calls a function with a given this value and arguments provided as an array.
- when we want to use the same function with different objects then we can use apply() method.

```js
const obj = {
  name: "mayur",
  lastname: "wagh",
};

const printFullName = function (city, state) {
  console.log(
    this.name + " " + this.lastname + " lives in " + city + " " + state
  );
};

const obj2 = {
  name: "testing",
  lastname: "call",
};

printFullName.apply(obj, ["panvel", "odhisa"]);
printFullName.apply(obj2, ["lonavla", "maharashtra"]);
```
