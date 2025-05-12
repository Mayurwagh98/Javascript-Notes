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
    resolve("p3 resolved");
  }, 3000);
});

Promise.all([p1, p2, p3]).then((res) => {
  console.log(res);
});
