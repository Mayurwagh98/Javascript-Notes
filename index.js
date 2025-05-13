document.querySelector("#grandParent").addEventListener(
  "click",
  () => {
    console.log("Grand Parent Clicked");
  },
  false
);

document.querySelector("#parent").addEventListener(
  "click",
  () => {
    console.log("Parent Clicked");
  },
  false
);

document.querySelector("#child").addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
    console.log("Child Clicked");
  },
  false
);
