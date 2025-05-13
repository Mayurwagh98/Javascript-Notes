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
- how we are calling the function, based on that also this value will change

```js
function x() {
  console.log(this);
}
x(); // undefined

window.x() // gloval object => window
```


### this in non strict mode - (this substitution)

### this value depends on how this is called (window)

### this inside a object's method

### call, apply, bind methods (shating methods)

### this inside arrow function

### this inside nested arrow function

### this inside DOM
