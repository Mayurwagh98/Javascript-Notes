### promise.all

- success case

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 resolved");
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p2 resolved");
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p3 resolved");
  }, 3000);
});

Promise.all([p1, p2, p3]).then((res) => {
  console.log(res);
});
```

<img width="738" alt="Screenshot 2025-05-12 at 17 00 31" src="https://github.com/user-attachments/assets/f8ba617f-b912-4699-b68e-f29364daff23" />

<img width="506" alt="Screenshot 2025-05-12 at 17 23 14" src="https://github.com/user-attachments/assets/8a0181d5-3f8d-4ec9-87ab-14fe81c32636" />

- fail case

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 resolved");
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p2 resolved");
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("p3 rejected");
  }, 3000);
});

Promise.all([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
```

<img width="658" alt="Screenshot 2025-05-12 at 17 03 09" src="https://github.com/user-attachments/assets/28fb4b5f-5382-493c-8535-84e571ad0e43" />

<img width="524" alt="Screenshot 2025-05-12 at 17 27 22" src="https://github.com/user-attachments/assets/7fe6c602-9861-4d00-810c-f7c66daf7192" />

### Promise.allSetteled

- success case

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 resolved");
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p2 resolved");
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p3 resolved");
    // reject("p3 rejected");
  }, 3000);
});

Promise.allSettled([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
```

<img width="570" alt="Screenshot 2025-05-12 at 17 05 06" src="https://github.com/user-attachments/assets/ed0d8999-f53c-461d-9f22-a3343096f35c" />

<img width="489" alt="Screenshot 2025-05-12 at 19 16 15" src="https://github.com/user-attachments/assets/40ed310c-e274-4f51-8e50-463135c85d9f" />

- fail case

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 resolved");
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p2 resolved");
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("p3 resolved");
    reject("p3 rejected");
  }, 3000);
});

Promise.allSettled([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
```

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 resolved");
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("p2 resolved");
    reject("p2 rejected");
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("p3 resolved");
    reject("p3 rejected");
  }, 3000);
});

Promise.allSettled([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
```

<img width="875" alt="Screenshot 2025-05-12 at 17 06 44" src="https://github.com/user-attachments/assets/077288f4-1439-49de-aaff-afad6bb84ef9" />

<img width="432" alt="Screenshot 2025-05-12 at 19 18 49" src="https://github.com/user-attachments/assets/acfa9d40-a0f7-448c-a718-a21c8bb857d8" />

### Promise.race

- success case

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 resolved");
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("p2 resolved");
    reject("p2 rejected");
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("p3 resolved");
    reject("p3 rejected");
  }, 3000);
});

Promise.race([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
```

<img width="482" alt="Screenshot 2025-05-12 at 19 20 39" src="https://github.com/user-attachments/assets/1358c66d-1f2f-414a-b00b-f1e3b1172ed0" />

<img width="827" alt="Screenshot 2025-05-12 at 17 09 17" src="https://github.com/user-attachments/assets/66bfbcf2-a869-4a4b-a0d0-891127cbd90c" />

- fail case

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("p1 resolved");
    reject("p1 resolved");
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("p2 resolved");
    reject("p2 rejected");
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("p3 resolved");
    reject("p3 rejected");
  }, 3000);
});

Promise.race([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
```

<img width="942" alt="Screenshot 2025-05-12 at 17 10 42" src="https://github.com/user-attachments/assets/6a06fd62-b840-46b9-b7e7-ccbe2481d456" />

<img width="496" alt="Screenshot 2025-05-12 at 19 22 49" src="https://github.com/user-attachments/assets/eb27f679-08c9-4ffc-a3ea-94359a177726" />

### Promise.any

- success case

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 resolved");
    // reject("p1 rejected");
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p2 resolved");
    // reject("p2 rejected");
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p3 resolved");
    // reject("p3 rejected");
  }, 3000);
});

Promise.any([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
```

<img width="486" alt="Screenshot 2025-05-12 at 19 25 10" src="https://github.com/user-attachments/assets/420f0ea1-401b-4f34-bdf8-98ad836c0b48" />

<img width="708" alt="Screenshot 2025-05-12 at 17 13 58" src="https://github.com/user-attachments/assets/9d510533-07f9-4e4e-a86c-a54ae33e4e9a" />

- fail case

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 resolved");
    // reject("p1 rejected");
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("p2 resolved");
    reject("p2 rejected");
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p3 resolved");
    // reject("p3 rejected");
  }, 3000);
});

Promise.any([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
```

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("p1 resolved");
    reject("p1 rejected");
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("p2 resolved");
    reject("p2 rejected");
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("p3 resolved");
    reject("p3 rejected");
  }, 3000);
});

Promise.any([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
    console.error(error.errors);
  });
```

<img width="485" alt="Screenshot 2025-05-12 at 19 27 12" src="https://github.com/user-attachments/assets/b532a157-ef37-4282-b942-180b35f4359e" />

<img width="718" alt="Screenshot 2025-05-12 at 17 15 47" src="https://github.com/user-attachments/assets/3374ecab-cd36-449e-91c5-7a125ad57e90" />

<img width="701" alt="Screenshot 2025-05-12 at 17 17 03" src="https://github.com/user-attachments/assets/9d15d0df-a58a-41e8-b59b-b7bfc854bd04" />

### lingo for `Setteled` key word

<img width="837" alt="Screenshot 2025-05-12 at 19 30 49" src="https://github.com/user-attachments/assets/3e7dcc6d-709b-4977-bd4b-577fe47e5011" />

