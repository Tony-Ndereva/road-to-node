console.log("Before");
getuser(1);
console.log("After");

function getuser(id) {
  setTimeout(() => {
    console.log("Reading a user from a database....");
    return { id: id, gitHubUsername: "Tony" };
  }, 2000);
}


//Callbacks
//Promises
//Ascync /await