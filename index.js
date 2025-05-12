const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 resolved");
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p2 resolved");
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolved("p3 resolved");
    reject("p3 rejected");
  }, 3000);
});

Promise.all([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
