### event bubbling

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
