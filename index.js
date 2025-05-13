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

obj.x();
