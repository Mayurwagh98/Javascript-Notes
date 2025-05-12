const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise resolved");
  }, 10000);
});

async function handlePromise() {
  const val1 = await p1;
  console.log("javacript");
  console.log(val1);
}

handlePromise();
