### Problem statement:
` I want to keep a track that how many times does user resizes the screen`

`Solution 1: Debouncing`
- Debouncing means we'll only count a resize after the user has stopped resizing for a certain period of time.

```js
let resizeCount = 0;
let debounceTimer;

window.addEventListener('resize', () => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    resizeCount++;
    console.log(`Resize count (debounced): ${resizeCount}`);
  }, 250); // Wait 250ms after last resize event
});
```