### event bubbling

- Event bubbling is a concept in the DOM (Document Object Model) where events "bubble" up from the innermost element (the target element) to the outermost element (usually the document body) in the DOM tree.
- When an event occurs on an element, it first triggers the event listeners attached to that element, and then it "bubbles up" to the parent elements, triggering their event listeners as well.
- This process continues until it reaches the document body or until the event is explicitly stopped.
- In the below example, when we click on the child div, the event will first trigger the event listener attached to the child div, then it will bubble up to the parent div, triggering the event listener attached to the parent div, and finally it will bubble up to the document body, triggering the event listener attached to the document body.

```html
<html lang="en">
  <style>
    div {
      min-width: 100px;
      min-height: 100px;
      padding: 30px;
      border: 1px solid red;
    }
    p {
      color: white;
      text-align: center;
    }
  </style>
  <body style="background-color: black">
    <div id="grandParent">
      <p>Grand Parent</p>
      <div id="parent">
        <p>Parent</p>
        <div id="child"><p>Child</p></div>
      </div>
    </div>
  </body>
</html>
<script src="./index.js"></script>
```

```js
document.querySelector("#grandParent").addEventListener("click", () => {
  console.log("Grand Parent Clicked");
});

document.querySelector("#parent").addEventListener("click", () => {
  console.log("Parent Clicked");
});

document.querySelector("#child").addEventListener("click", () => {
  console.log("Child Clicked");
});
```

Output:

```js
Child Clicked
Parent Clicked
Grand Parent Clicked
```

### event capturing / trickling

- Event capturing is a concept in the DOM (Document Object Model) where events "trickle down" from the outermost element (usually the document body) to the innermost element (the target element) in the DOM tree.
- When an event occurs on an element, it first triggers the event listeners attached to the document body, and then it "trickles down" to the child elements, triggering their event listeners as well.
- This process continues until it reaches the target element or until the event is explicitly stopped.
- In the below example, when we click grand parent div, the event will first trigger the event listener attached to the document body, then it will trickle down to the child div, triggering the event listener attached to the child div, and finally it will trickle down to the grand parent div, triggering the event listener attached to the grand parent div.

```js
document.querySelector("#grandParent").addEventListener(
  "click",
  () => {
    console.log("Grand Parent Clicked");
  },
  true
);

document.querySelector("#parent").addEventListener(
  "click",
  () => {
    console.log("Parent Clicked");
  },
  true
);

document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("Child Clicked");
  },
  true
);
```

Output:

```js
Grand Parent Clicked
Parent Clicked
Child Clicked
```

### why event bubbling and capturing are not good for performance

- Event bubbling and capturing can have a negative impact on performance, especially when dealing with large DOM trees or when there are many event listeners attached to elements.
- The reason for this is that when an event occurs on an element, it first triggers the event listeners attached to that element, and then it "bubbles up" or "trickles down" to the parent elements, triggering their event listeners as well.
- This process can be computationally expensive, especially when there are many event listeners attached to elements.
- Additionally, event bubbling and capturing can cause issues with event propagation, especially when dealing with nested elements that have overlapping event listeners.

### how to stop event bubbling and capturing

- To stop event bubbling and capturing in JavaScript, you can use the `stopPropagation()` method.
- In the below example, when we click on child div, the event won't propogate to parent or grandparent div.
- In this example we have stopped the event propagation from bubbling up to the parent div.

```js
document.querySelector("#grandParent").addEventListener(
  "click",
  () => {
    console.log("Grand Parent Clicked");
  },
  false
);

document.querySelector("#parent").addEventListener(
  "click",
  () => {
    console.log("Parent Clicked");
  },
  false
);

document.querySelector("#child").addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
    console.log("Child Clicked");
  },
  false
);
```

Output:

```js
Child Clicked
```
