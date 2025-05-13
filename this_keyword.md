### this in global space

- global or window object is different in different circumstances
- it depends on the environment in which the code is running
- example: browser, node, smartwatch etc.

```js
console.log(this); // global object - window, global
```

### this inside a function

- non strict mode

```js
function x() {
  console.log(this);
}
x(); // global object => window
```

- strict mode

```js
function x() {
  console.log(this);
}
x(); // undefined

window.x(); // global object => window
```

### this in non strict mode - (this substitution)

- if the value pf `this` keyword is undefined or null,
- this keyword will be replaced with global object
- only in non strict mode

### this value depends on how this is called (window)

```js
function x() {
  console.log(this);
}
x(); // undefined

window.x(); // global object => window
```

### this inside a object's method

- here `this` keyword will reference to the object
- same behaviour will be in non strict mode as well

```js
const obj = {
  name: "mayur",
  x: function () {
    console.log(this);
  },
};

obj.x(); // {name:'mayur', x: ƒ}
```

```js
"use strict";

const obj = {
  name: "mayur",
  x: function () {
    console.log(this.name);
  },
};

obj.x(); // mayur
```

### call, apply, bind methods (shating methods)

- call method
- same behaviour will be in non strict mode as well

```js
"use strict";

const obj = {
  name: "mayur",
  x: function () {
    console.log(this.name);
  },
};

const obj2 = {
  name: "wagh",
};

obj.x();
obj.x.call(obj2); // wagh
```

### this inside arrow function

- arrow function does not have their own `this` keyword
- it will reference to the parent's `this` keyword
- in this case`this` keyword will reference to the global object
- as parent of `obj` is global object
- same behaviour will be in non strict mode as well

```js
"use strict";

const obj = {
  name: "mayur",
  x: () => {
    console.log(this);
  },
};

obj.x();
```

### this inside nested arrow function

- as arrow function does not have their own `this` keyword
- it will reference to the parent's `this` keyword
- in this case`this` keyword will reference to parent's `this` keyword
- parent is `x` in lexical scope and its parent is `obj` in lexical scope
- same behaviour will be in non strict mode as well

```js
"use strict";

const obj = {
  name: "mayur",
  x: function () {
    const y = () => {
      console.log(this);
    };
    y();
  },
};

obj.x(); // {name:'mayur', x: ƒ}
```

```js
"use strict";

const obj = {
  name: "mayur",
  x: () => {
    const y = () => {
      console.log(this);
    };
    y();
  },
};

obj.x(); // global object => window
```

### this inside DOM
