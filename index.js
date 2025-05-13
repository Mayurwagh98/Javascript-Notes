const obj = {
  name: "mayur",
  lastname: "wagh",
};

const printFullName = function (city, state) {
  console.log(
    this.name + " " + this.lastname + " lives in " + city + " " + state
  );
};

const obj2 = {
  name: "testing",
  lastname: "call",
};

const newPrintVal = printFullName.bind(obj, "pune", "maharashtra");
newPrintVal();
