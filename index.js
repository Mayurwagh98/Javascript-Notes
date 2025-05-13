"use strict";

const obj = {
  name: "mayur",
  x: () => {
    console.log(this);
  },
};

obj.x();
