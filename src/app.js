// Javascript Promises
let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve("Success!");
  } else {
    reject("Fail!");
  }
});

p.then((message) => console.info("Happy to say this you're: " + message)).catch(
  (message) => console.error("Sorry to say this, you're: " + message)
);
