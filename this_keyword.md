### this in global space

- global or window object is different in different circumstances
- it depends on the environment in which the code is running
- example: browser, node, smartwatch etc.

```js
console.log(this); // global object - window, global
```

### this inside a function

- non strict mode

```js
function x() {
  console.log(this);
}
x(); // global object => window
```

- strict mode

```js
function x() {
  console.log(this);
}
x(); // undefined

window.x(); // global object => window
```

### this in non strict mode - (this substitution)

- if the value pf `this` keyword is undefined or null,
- this keyword will be replaced with global object
- only in non strict mode

### this value depends on how this is called (window)

```js
function x() {
  console.log(this);
}
x(); // undefined

window.x(); // global object => window
```

### this inside a object's method

### call, apply, bind methods (shating methods)

### this inside arrow function

### this inside nested arrow function

### this inside DOM
