### concurrency model

- concurrency model refers to how the language handles the execution of multiple pieces of code
- as javascript is a single threaded language, and if any piece of code is blocking the main thread (call stack), that's what is concurreny model

```js
console.log("start");

function cb() {
  console.log("callback");
}

setTimout(cb, 5000);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("end");
```

Ouput:

```
start
end
Promise
callback
```

- we think that `callback` will be consoled right after `end`, but that's not how js happens, as js is single threaded language
- setTimout will wait in `callback queue` to finish the promise to resolve, as callstack is busy executing the promise
- once its resolved then `callback` will be consoled, the promise is blocking the main thread here, and this is what concurrency model is