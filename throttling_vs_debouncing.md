### Basic difference between throttling and debouncing

- debouncing happens after the user has stopped resizing for a certain period of time (or when the difference between two key strocks is greater than or equal to time given).
- throttling happens at a fixed rate, no matter how fast events come in.

### Problem statement 1:

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

### Problem statement 2: Shooting Game (Machine Gun vs. Pistol)

`The Problem Without Controls`

- If we naively fire a weapon every time the fire button is pressed/held:

```js
document.addEventListener("keydown", (e) => {
  if (e.key === " ") {
    // Space bar to shoot
    shootWeapon();
  }
});
```

This would cause:

- `Pistol`: Might fire multiple times if the key bounces (mechanical issue)
- `Machine Gun`: Would fire uncontrollably fast, limited only by CPU speed

1. Pistol Implementation (Debouncing)
- Pistol behavior: Should fire exactly once per trigger pull, ignoring rapid repeats.

```js
let pistolDebounce = false;

document.addEventListener('keydown', (e) => {
  if (e.key === ' ' && !pistolDebounce) {
    pistolDebounce = true;
    firePistol();
    
    // Reset after short delay (not on keyup!)
    setTimeout(() => { pistolDebounce = false }, 100);
  }
});
```

How it works:

- Sets a flag when first fired
- Ignores subsequent presses until timeout clears
- Prevents "bouncing" from making multiple shots
- Simulates trigger reset time

2. Machine Gun Implementation (Throttling)

- Machine gun behavior: Should fire at a controlled rate when trigger is held down.

```js
let canFireMG = true;
const mgFireRate = 100; // ms between shots (10 shots/second)

document.addEventListener('keydown', (e) => {
  if (e.key === ' ') {
    if (canFireMG) {
      canFireMG = false;
      fireMachineGun();
      
      // Allow next shot after delay
      setTimeout(() => { canFireMG = true }, mgFireRate);
    }
  }
});
```

How it works:

- Enforces minimum time between shots
- Creates consistent automatic fire rate
- Still responds to held key (unlike debounce)
- Simulates mechanical rate limitations

| Aspect               | Pistol (Debounce)       | Machine Gun (Throttle)    |
|----------------------|-------------------------|---------------------------|
| **Trigger Press**    | Single shot             | Starts firing             |
| **Trigger Hold**     | No effect               | Continuous fire           |
| **Rate Control**     | Prevents doubles        | Limits max fire rate      |
| **Real-world Analog**| Trigger reset mechanism | Cyclic rate mechanism     |