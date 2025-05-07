const radius = [1, 3, 4, 5];

const area = function (radius) {
  return Math.PI * radius * radius;
};

Array.prototype.calculate = function (logic) {
  let output = [];

  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};

console.log(radius.calculate(area));
