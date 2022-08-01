console.log("before");
getuser(1, function (user) {
  console.log("user", user);
});
console.log("After");

function getuser(id, callback) {
  setTimeout(() => {
    console.log("Reading a user from a database...");
    callback({ id: id, gitHubUsername: "Tony" });
  }, 4000);
}
