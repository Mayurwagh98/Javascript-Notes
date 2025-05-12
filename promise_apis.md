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

- fail case

  <img width="658" alt="Screenshot 2025-05-12 at 17 03 09" src="https://github.com/user-attachments/assets/28fb4b5f-5382-493c-8535-84e571ad0e43" />

### Promise.allSetteled

- success case

<img width="570" alt="Screenshot 2025-05-12 at 17 05 06" src="https://github.com/user-attachments/assets/ed0d8999-f53c-461d-9f22-a3343096f35c" />

- fail case

<img width="875" alt="Screenshot 2025-05-12 at 17 06 44" src="https://github.com/user-attachments/assets/077288f4-1439-49de-aaff-afad6bb84ef9" />

### Promise.race

- success case
  <img width="827" alt="Screenshot 2025-05-12 at 17 09 17" src="https://github.com/user-attachments/assets/66bfbcf2-a869-4a4b-a0d0-891127cbd90c" />

- fail case
  <img width="942" alt="Screenshot 2025-05-12 at 17 10 42" src="https://github.com/user-attachments/assets/6a06fd62-b840-46b9-b7e7-ccbe2481d456" />

### Promise.any

- success case
  <img width="708" alt="Screenshot 2025-05-12 at 17 13 58" src="https://github.com/user-attachments/assets/9d510533-07f9-4e4e-a86c-a54ae33e4e9a" />

- fail case
  <img width="718" alt="Screenshot 2025-05-12 at 17 15 47" src="https://github.com/user-attachments/assets/3374ecab-cd36-449e-91c5-7a125ad57e90" />

<img width="701" alt="Screenshot 2025-05-12 at 17 17 03" src="https://github.com/user-attachments/assets/9d15d0df-a58a-41e8-b59b-b7bfc854bd04" />
