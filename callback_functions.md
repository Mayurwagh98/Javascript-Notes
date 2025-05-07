### callback functions

- functions which are not called immediatley, are called callback functions
- they are called when a certain event happens or when a certain task is completed
- they are used to perform some action after a certain event or task is completed
- they are used to perform some action after a certain event or task is completed

```js
// function present inside a setTimeout function is a callback function
// it is called after 1 second of delay
setTimeout(function () {
  console.log("Hello World");
}, 1000);


// function passed as a argument is a callback function
function x(y){
    conosle.log("x")
    y()
}

x(funtion(){
    console.log("y")
})
```

### deep dive into Event listeners

- function passed in even listener is a callback function
- which will be called when the button is clicked

```html
document.getElementById("clickMe").addEventListener("click",function(){
console.log("clicked") })
```

### closures with event listeners

- callback function in event listener forms a closure with it's parent function `attachEventListeners`
- using this closure we are encapsulating the `count` and restricting it's manipulation without button clicked

```html
function attachEventListeners(){ 
    var count = 0
    document.getElementById("clickMe").addEventListener("click",function(){
    console.log("clicked", ++count) 
    }) 
}
attachEventListeners()
```

### grabage collection & remove event listeners
