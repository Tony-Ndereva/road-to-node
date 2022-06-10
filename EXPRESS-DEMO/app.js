const { AuthSchema } = require("./validate_schema"); //will  look at this
const express = require("express");
const app = express();
const logger = require("./middleware/logger");
const authenticator = require("./middleware/authenticator");
const helmet = require("helmet"); // will Look at this
const morgan = require("morgan"); // Will look at this
const config = require("config"); // Will look at this
const courses = require("./routes/courses");
const home = require("./routes/home");

// Will look at thesw
const debug = require("debug")("app:startup");

app.set("view engine", "pug");
app.set("views", "./views"); // Default
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(helmet());

app.use("/api/courses", courses);
app.use("/", home);

// Configuration

console.log(`Application name : ${config.get("name")}`);
console.log(`Mail Server : ${config.get("mail.host")}`);
console.log(`Mail Password : ${config.get("mail.password")}`);
if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  debug("Morgan Enabled");
}

app.use(logger);
app.use(authenticator);

const port = process.env.PORT || 3000;
// On terminal , i have set PORT = 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}.....`);
});

