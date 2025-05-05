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
<img width="1173" alt="Screenshot 2025-05-05 at 17 35 39" src="https://github.com/user-attachments/assets/460082cd-ec55-45db-9275-2c9f8c29ada9" />
<img width="698" alt="Screenshot 2025-05-05 at 17 35 58" src="https://github.com/user-attachments/assets/cc3fb968-c244-4e48-9f12-3bdadbd2c0c2" />
