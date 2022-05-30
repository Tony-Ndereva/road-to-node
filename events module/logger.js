const emmitter = require("events");

var url = "http://paypal.com";

class Logger extends emmitter {
  log(message) {
    console.log(message);
    this.emit("messageLogged", { id: 1, url: "http://google.com" });
  }
}

module.exports = Logger;
