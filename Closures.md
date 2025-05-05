### Closures

- functions bundled together with it Lexical environment

```js
function x() {
  var a = 10;

  function y() {
    console.log(a);
  }
  y();
}
x(); // 7
```
<img width="1432" alt="Screenshot 2025-05-06 at 02 12 14" src="https://github.com/user-attachments/assets/9f7b3b82-87c1-4db4-871a-778bcc931622" />

- this is the closures as `y` is binded with it's parent lexical scope (x) & x is binded with it's parent lexical scope (window/this)

- below codes output will be `10`
- as even after `x` is executed & removed from the call stack, `y` still remembers the reference to `a` (`Note: reference will be remmebered, not value`) and it's lexical scope
- and this is what the closure is

```js
function x(){
    var a 10
    function y(){
        console.log(a)
    }

    return y
}

var z = x()

console.log(z)

z() // 10

```
<img width="1432" alt="Screenshot 2025-05-06 at 02 13 15" src="https://github.com/user-attachments/assets/f90221cc-c79d-4893-84f4-92a8aba8b652" />

- as reference of the `a` is being remembered by the functions the new reference of `a` is 100, so the output will be `100`

```js
function x(){
    var a 10
    function y(){
        console.log(a)
    }
    a = 100
    return y
}

var z = x()

console.log(z)

z() // 100

```

- even after executing x & y, output will be `100, 20`, cause functions will remember the reference of `a` & `b`, not values only reference, and this is what the clsoure is

```js
function z() {
  var a = 100;
  function x() {
    var b = 20;
    function y() {
      console.log(a, b);
    }
    y();
  }
  x();
}
z(); // 100, 20
```
<img width="1432" alt="Screenshot 2025-05-06 at 02 13 45" src="https://github.com/user-attachments/assets/04d6a42c-3da9-4672-b5a2-c6e6112d9caf" />
