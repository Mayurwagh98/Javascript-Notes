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
