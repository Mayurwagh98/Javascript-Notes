function x() {
  for (let i = 1; i <= 5; i++) {
    function closure(i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }
    closure(i);
  }

  console.log("settimeout and closures");
}

x();
