### Basic difference between throttling and debouncing

- debouncing happens after the user has stopped resizing for a certain period of time (or when the difference between two key strocks is greater than or equal to time given).
- throttling happens at a fixed rate, no matter how fast events come in.

### Problem statement:

` I want to keep a track that how many times does user resizes the screen`

`Solution 1: Debouncing`

- Debouncing means we'll only count a resize after the user has stopped resizing for a certain period of time.

```js
let resizeCount = 0;
let debounceTimer;

window.addEventListener("resize", () => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    resizeCount++;
    console.log(`Resize count (debounced): ${resizeCount}`);
  }, 250); // Wait 250ms after last resize event
});
```

`How it works:`

- When a resize event occurs, we clear any pending timer
- We start a new timer for 250ms
- Only if no new resize events occur for 250ms do we increment our counter
- This counts a resize only when the user has "paused" their resizing

`Solution 2: Throttling`

- Throttling means we'll only count one resize per fixed time interval, no matter how many events occur.

```js
let resizeCount = 0;
let throttleTimeout = false;

window.addEventListener("resize", () => {
  if (!throttleTimeout) {
    throttleTimeout = true;
    setTimeout(() => {
      resizeCount++;
      console.log(`Resize count (throttled): ${resizeCount}`);
      throttleTimeout = false;
    }, 250); // Only count once every 250ms
  }
});
```

`How it works:`

- When a resize event occurs, we check if we're not currently throttling
- If not, we set a throttle flag and increment our counter
- We only allow another increment after 250ms has passed
- This gives us a steady count rate regardless of how fast events come in
