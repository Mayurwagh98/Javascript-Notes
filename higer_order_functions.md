### HOF

- when a function is passed as an argument into other function or return the function is HOF

```js
const radius = [1, 3, 4, 5];

const area = function (radius) {
  return Math.PI * radius * radius;
};

const calculate = function (arr, logic) {
  let output = [];

  for (let i = 0; i < arr.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

console.log(calculate(radius, area));
```

- let's try to mimic the hof `map` function

```js
const radius = [1, 3, 4, 5];

const area = function (radius) {
  return Math.PI * radius * radius;
};

// this will the calculate method on all the array
Array.prototype.calculate = function (logic) {
  let output = [];

  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};

console.log(radius.calculate(area));
```
