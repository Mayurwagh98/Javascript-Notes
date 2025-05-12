const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 1 resolved");
  }, 5000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 2 resolved");
  }, 10000);
});

async function handlePromise() {
  const val1 = await p1;
  console.log("javacript");
  console.log(val1);

  const val2 = await p2;
  console.log(val2);
}

handlePromise();
