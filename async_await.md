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

- to handle the promise we use `await` keyword

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise resolved");
  }, 10000);
});

async function handlePromise() {
  const val1 = await p1;
  console.log("javacript");
  console.log(val1);
}

handlePromise();
```

- in the below example as 1st promise will be taking 10 secs to resolve, so 2nd promise will be waiting for 10 secs to resolve.
- by wait here JS won't wait for 10 secs, as soon as it encounters `await p1`
- it will suspend (moved out of the call stack) the execution of the function and wait for the result of the promise.
- once the promise is resolved, it will resume the execution of the function.
- by that time 2nd promise will be resolved.
- so both will be consoled at the same time.

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 1 resolved");
  }, 10000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 2 resolved");
  }, 5000);
});

async function handlePromise() {
  const val1 = await p1;
  console.log("javacript");
  console.log(val1);

  const val2 = await p2;
  console.log(val2);
}

handlePromise();
```

output:

```js
javacript
promise 1 resolved
promise 2 resolved
```

- in the below example now the 1st promise will be taking 5 secs and 2nd one 10 secs
- in this case promise 1 will be resolved first and then promise 2 will be resolved.

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 1 resolved");
  }, 5000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 2 resolved");
  }, 10000);
});

async function handlePromise() {
  const val1 = await p1;
  console.log("javacript");
  console.log(val1);

  const val2 = await p2;
  console.log(val2);
}

handlePromise();
```

### real world example

- in the below example we are using async and await to fetch data from an API.
- we are using `fetch` API to fetch data from an API.
- `fetch` API returns a promise.
- here we are using `await` for `data.json` cause fetch returns a promise.

```js
const API_URl = "https://api.github.com/users/Mayurwagh98";

async function handlePromise() {
  try {
    const data = await fetch(API_URl);

    const jsonResponse = await data.json();

    console.log(jsonResponse);
  } catch (error) {
    console.log(error);
  }
}

handlePromise();
```
