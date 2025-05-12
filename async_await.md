### what is async

- async is a keyword that is used to define a coroutine.
- A coroutine is a special function that can suspend its execution and resume it later.
- The async keyword is used to define a coroutine.
- The await keyword is used to suspend the execution of a coroutine and wait for the result of another coroutine.
- async always returns a promise

- in the below case we are not returning a promise, but as we are using async keyword, it returns a promise.

```js
async function getData() {
  return "javascript";
}

const dataPromise = getData();
console.log(dataPromise);
```

output:

```js
`Promise {<fulfilled>: 'javascript'}`;
```

- now let's return real promise

```js
const p = new Promise((resolve, reject) => {
  resolve("promise 1 resolved");
});

async function getData() {
  return p;
}

const dataPromise = getData();
console.log(dataPromise);
```

output:

```js
`Promise {<pending>}`;
```
