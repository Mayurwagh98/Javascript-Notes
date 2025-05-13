document.querySelector("#grandParent").addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
    console.log("Grand Parent Clicked");
  },
  true
);

document.querySelector("#parent").addEventListener(
  "click",
  () => {
    console.log("Parent Clicked");
  },
  true
);

document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("Child Clicked");
  },
  true
);
