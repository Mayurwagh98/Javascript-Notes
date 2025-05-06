```js
function x() {
    for(var i=1; i<=5;i++>){
        setTimeout(function () {
          console.log(i);
        }, i * 1000);
    }

  console.log("settimeout and closures");
}

x()
```

- Output: 6,6,6,6,6
- This behaviour is due the closures, the function wrapped in setTimeout is a closure
- as we know that closure remembers the reference of the variable, in this case `i`
- by the time `setTimeout` gets time to execute the value of `i` is already 6
- and as `i` is declared using `var` it stays in global scope and closure remembers it's reference, so it prints `6` five times

- to solve the problem declare `i` using `let` such that for each loop block scope will be created
- and reference of the `i` will be remembered by closure

```js
function x() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}
x();
```

- another way of solving this, wrapping the loop inside a function such that it will form a closure and will be kept in a different scope
- now everytime loop runs a new closure will be created with a different reference to `i`

```js
function x() {
  for (var i = 1; i <= 5; i++) {
    function closure(i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }
    closure(i);
  }
}

x();
```
