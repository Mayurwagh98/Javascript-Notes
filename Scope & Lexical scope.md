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

### Lexical scope
- In the above above code sample `c` function is lexically inside of `a`, that means it has access of it's local variables as well as `a`'s values
- Similarly `a` is lexically inside `window` function
- `In short => lexical functions has access to it's local & parent variables/values`
