const transport = require("./logger");
const Logged = new transport();
Logged.addListener("messageLogged", (e) => {
  for (let key in e)
    console.log(`message ${key} : ${e[key]} has been received successfully`);
});

Logged.log("message");
