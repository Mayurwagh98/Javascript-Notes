- You can directly envoke the inner function like `()` just after envoking `outer()`

```js
function outer() {
  var a = 10;

  return function inner() {
    console.log(a);
  };
}

outer()();
```

```js
function outest() {
  var c = 10;
  function outer(b) {
    function inner() {
      console.log(a, b);
    }
    let a = 20;
    return inner;
  }

  return outer;
}

var close = outest()("hello");
close();
```

### Encapsulation

- one advantage of closures is that we can use it to hide the data, or make data private or encapsulate it

```js
function counter() {
  var count = 0;
  return function increment() {
    count++;

    console.log(count);
  };
}

counter()();
```

- interesting behaviour

```js
function counter() {
  var count = 0;
  return function increment() {
    count++;

    console.log(count);
  };
}

counter()(); // 1
counter()(); // 1
counter()(); // 1

// Each time you call counter(), a new function is created with its own separate count variable, initialized to 0.

var inc1 = counter(); // count = 0
inc1(); // prints 1

var inc2 = counter(); // count = 0
inc2(); // prints 1

var inc3 = counter(); // count = 0
inc3(); // prints 1
```

- but if you do

```js
function counter() {
  var count = 0;
  return function increment() {
    count++;

    console.log(count);
  };
}

var b = counter();
b(); // 1
b(); // 2
b(); // 3

// you're calling counter() only once, and saving the inner increment function (which closes over the same count) in variable b.
// All calls to b() share and modify the same count variable inside the closure.
```

- another advantage of closure is that we can use same function/closure to create another one

```js
var counter1 = counter()
counter1(); => 1
counter1(); => 2

var counter2 = counter()
counter2() => 1
```

- the above code is not scalable, to make it scalable we can use Contructor along with closures

```js
function Counter() {
  var count = 0;

  this.incrementCounter = function () {
    count++;
    console.log(count);
  };

  this.decrementCounter = function () {
    count--;
    console.log(count);
  };
}

var counter1 = new Counter();

counter1.incrementCounter();
counter1.decrementCounter();
```
