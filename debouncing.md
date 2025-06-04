### debouncing

- Debouncing is a technique in which, "no matter how many times the user fires the event, the attached function will be executed only after the specified time once the user stops firing the event."

```js

<input type="text" onkeyup="debounceCall()">

let counter = 0;

const getData = () => {
  console.log("Fetching data from the server", counter++);
};

function debounce(func, delay) {
  let timer;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

let debounceCall = debounce(getData, 300);
```
