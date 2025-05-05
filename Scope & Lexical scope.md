### Scope

- A scope in JavaScript refers to the current context of code, which determines which variables are accessible at a given point in the program.

```js
function a() {
  var b = 10; // b is only accessible inside this function

  c();

  function c() {
    console.log(b);
  }
}

a();
```
