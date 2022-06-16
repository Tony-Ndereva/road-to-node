// Async and Await approach
// console.log("Before");
// getuser(1, (user) => {
//   console.log("User:", user);
//   getRepositories(user.gitHubusername, (repos) => {
//     getCommits(repos[0], (commits) => {
//       console.log(commits);
//     });
//   });
// });

// getuser(1)
//   .then((user) => getRepositories(user.gitHubusername))
//   .then((repos) => getCommits(repos[0]))
//   .then((commits) => console.log("commits", commits))
//   .catch((err) => console.log("Error:", err.message));

// Ascync and Await approach
async function displayCommits() {
  try {
    const user = await getuser(1);
    const repos = await getRepositories(user.gitHubusername);
    const commits = await getCommits(repos[0]);
    console.log(commits);
  } catch (err) {
    console.log("Error:", err.message);
  }
}
displayCommits();

console.log("After");

function getuser(id) {
  return new Promise((resolve, reject) => {
    // Kick off async work
    setTimeout(() => {
      console.log("Getting users from Database");
      resolve({ id: id, gitHubusername: "Tony" });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Connecting to GitHub API....");
      // resolve(["repo1", "repo2", "repo3"]);
      reject(new Error("Could not get the repos"));
    }, 2000);
  });
}
function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Getting Commits");
      resolve(["commit"]);
    });
  });
}
