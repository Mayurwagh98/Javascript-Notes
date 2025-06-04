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

### creating our own bind function

```js
Function.prototype.myBind = function (...args) {
  let obj = this; // this will point to the object on which myBind is called

  params = args.slice(1); // this will give us the arguments passed in the myBind function

  return function (...args2) {
    // this will give us the arguments passed in the printMyName function

    obj.apply(args[0], [...params, ...args2]); // this will give us the arguments passed in the printMyName function
  };
};

let printMyName2 = printName.myBind(fullName, "nasik");
printMyName2("maharashtra"); // mayur wagh nasik maharashtra
```
