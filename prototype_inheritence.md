### prototype

- a prototype is an object that other objects inherit properties and methods from

- if we do `arr.__proto__` the output will be similar to `Array.prototype` => further if we do `arr.__proto__.__proto__` the output will be similar to `Object.prototype`

- this means that the `arr` inherited the properties of the base object, which is `Object`

<img width="499" alt="Screenshot 2025-05-08 at 03 41 34" src="https://github.com/user-attachments/assets/8ddabd12-7964-4781-b52e-b75e1d12bc68" />


- that's why we say everything in js boils down to object

```js
let arr = ["apple", "orange"];
```

```js
let object = {
  name: "mayur",
  lastname: "wagh",
  getIntro: function () {
    console.log(this.name + this.lastname);
  },
};

let object2 = {
  city: "nasik",
};

// never do this
object2.__proto__ = object;
```

### Output:

- if try to access `object2.name`

```
mayur
```

- valid way to set your properties

```js
// valid way => impelemnting my own property in Object prototype
Object.prototype.myObject = object;

// setting my own property on function

Function.prototype.myBind = function () {
  console.log("hellow");
};

// this func will have the access to the property myBind
// it can inherite it from its parent which is `Function`
function fun() {}
```
