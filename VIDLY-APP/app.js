const express = require("express");

const app = express();
app.use(express.urlencoded({ extended: true }));
const config = require("config");
require("./startup/logging");
require("./startup/routes");
require("./startup/connect");
// process.on("uncaughtE xception", (ex) => {
//   console.log("We got an uncaught exception");
//   winston.error(ex.message, ex);
// });

// throw new Error("Something failed during startup");

if (!config.get("jwtPrivateKey")) {
  console.error("FATAL ERROR: jwtPrivateKey is not defined");
  process.exit(1);
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
