const p = new Promise((resolve, reject) => {
  resolve("promise 1 resolved");
});

async function getData() {
  return p;
}

const dataPromise = getData();
console.log(dataPromise);
