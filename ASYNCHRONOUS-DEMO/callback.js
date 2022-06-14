console.log("Before");
getuser(1, (user) => {
  console.log("User:", user);
  getRepositories(user.gitHubusername, (repos) => {
    console.log("Available Repos:", repos);
  });
});
console.log("After");

function getuser(id, callback) {
  setTimeout(() => {
    console.log("Getting users from Database");
    callback({ id: id, gitHubusername: "Tony" });
  }, 2000);
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log("Connecting to GitHub API....");
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}
