const p = new Promise((resolve, reject) => {
  // Kick off some async work
  // resolve(1);

  setTimeout(() => {
    resolve(1) ; // pending => resolved or fulfilled
    reject(new Error("message")); // pending  => rejected
  }, 2000);
});

p.then((result) => console.log("Result: ", result)).catch((err) =>
  console.log("Error", err.message)
);
