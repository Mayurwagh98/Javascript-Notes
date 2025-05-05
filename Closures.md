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
