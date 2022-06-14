// const p = Promise.resolve({ id: 1 });
// p.then((result) => console.log(result));

// const q = Promise.reject(new Error("Reason for rejection..."));
// q.catch((error) => console.log(error));

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Asyc operation 1....");
    reject(new Error("Because something Failed..."));
  }, 2000);
});
const p2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Asyc operation 2 ....");
    resolve(2);
  }, 2000);
});
Promise.race([p1, p2])
  .then((result) => console.log(result))
  .catch((err) => console.log("Error", err.message));
