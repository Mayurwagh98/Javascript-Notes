### Block scope

- whatever code is written in `{....}` is comes under a block scope
- block is also called as `compound statement` as multiple statemnts are grouped

```js
{
  var a = 10;

  console.log(a);
}
```

```js
if (true) {
  let a = 20;
  console.log(a);
}
```

- In the above examples I am grouping multiple statements

```js
{
  var a = 10;
  let b = 20;
  const c = 30;

  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(a); // 10
console.log(b); // reference error => as b is in block scope it throws Reference error as b is not defined
console.log(c); // as error is thorwn JS wont run further, c wont be printed
```
<img width="1432" alt="Screenshot 2025-05-06 at 01 36 44" src="https://github.com/user-attachments/assets/78bb6803-6ff7-4010-983b-b486485e1a60" />
<img width="1432" alt="Screenshot 2025-05-06 at 01 37 10" src="https://github.com/user-attachments/assets/d3e34087-dfc6-4a88-be32-654f35048a9b" />

### Shadowing

```js
var a = 1000;
{
  var a = 10;
  let b = 20;
  const c = 30;

  console.log(a); // 10 => shadowing
  console.log(b); // 20
  console.log(c); // 30
}

console.log(10); // 10 => as `a` was shadowed so it replaced the value of `a` present in the global scope
```

- above `a` present in the `block scope` is shadowing the `a` present in the global scope

- shadowing with `let` & `const`

```js
let b = 100; // different scope which is `Script` in browser
{
  var a = 10;
  let b = 20;
  const c = 30;

  console.log(a); // 10
  console.log(b); // 20 => Block scope
  console.log(c); // 30
}

console.log(b); // 100
```

- In the above example `b` was not shadowed as both `b`s were present in the different scopes
<img width="1432" alt="Screenshot 2025-05-06 at 01 39 02" src="https://github.com/user-attachments/assets/31100ae6-b648-4922-82a6-ddee2b446d6f" />

### Illegal Shadowing

- Here `a` won't be shadowed as `a` is already declared in the gloabl scope, this will throw an `Syntax error: Identifier a has already been declared`

```js
let a = 100;
{
  var a = 10; // Syntax error: Identifier a has already been declared`
}
```
<img width="1432" alt="Screenshot 2025-05-06 at 01 39 35" src="https://github.com/user-attachments/assets/e882f816-7f54-40c5-b4ff-dbfacb222818" />

### Legal shadowing

```js
var a = 10;
{
  let a = 20;
}
```
<img width="1432" alt="Screenshot 2025-05-06 at 01 40 07" src="https://github.com/user-attachments/assets/f71ef265-01d4-405c-912a-4292a4aef042" />
