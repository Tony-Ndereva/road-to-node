const importer = require("./logger");
const Logged = new importer();
Logged.addListener("messageLogged", (e) => {
  for (let key in e)
    console.log(`message ${key} : ${e[key]} has been received successfully`);
});

Logged.log("");

// OUTPUT:
// message id: 10 has been received successfully
// message url: http://google.com has been received successfully
