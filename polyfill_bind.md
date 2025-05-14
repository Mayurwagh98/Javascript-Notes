### normal bind method

```js
let fullName = {
  firstName: "mayur",
  lastName: "wagh",
};

let printName = function () {
  console.log(this.firstName + " " + this.lastName);
};

const printMyName = printName.bind(fullName);
printMyName();
```
