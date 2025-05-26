let fullName = {
  firstName: "mayur",
  lastName: "wagh",
};

let printName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " " + hometown + " " + state
  );
};

// const printMyName = printName.bind(fullName);
// printMyName();


