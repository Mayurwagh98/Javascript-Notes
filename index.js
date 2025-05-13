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

printFullName.apply(obj, ["panvel", "odhisa"]);
printFullName.apply(obj2, ["lonavla", "maharashtra"]);
