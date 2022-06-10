const { AuthSchema } = require("./validate_schema"); //will  look at this
const express = require("express");
const app = express();
const logger = require("./logger");
const authenticator = require("./authenticator");
const helmet = require("helmet"); // will Look at this
const morgan = require("morgan"); // Will look at this
const config = require("config"); // Will look at this

// Will look at thesw
const debug = require("debug")("app:startup");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(helmet());

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
const courses = [
  { id: 1, name: "Biology" },
  { id: 2, name: "Chemistry" },
  { id: 3, name: "Physics" },
];

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send("Course was not found");
  res.send(course);
});
app.post("/api/courses", (req, res) => {
  const result = AuthSchema.validate(req.body);
  if (result.error)
    return res.status(404).send(result.error.details[0].message);

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});
app.put("/api/courses/:id", (req, res) => {
  // Look up for the course
  // If does not exist, return 404
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send("Course was not found");

  // Validate
  // If invalid, return 400 - Bad request
  const result = AuthSchema.validate(req.body);
  if (result.error)
    return res.status(400).send(result.error.details[0].message);

  //Update course

  course.name = req.body.name;

  // Return the updated course
  res.send(course);
});

app.delete("/api/courses/:id", (req, res) => {
  // Look for the course
  const course = courses.find((c) => c.id === parseInt(req.params.id));

  if (!course) return res.status(404).send("Course is not available");

  //Delete
  const index = courses.indexOf(course);
  courses.splice(index, 1);
  for (let key in course)
    res.send(`course ${key}  has been deleted successfully`);
});

const port = process.env.PORT || 3000;
// On terminal , i have set PORT = 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}.....`);
});

// OUTPUT ON BROWSER:
// when you load url : 'localhost:5000/api/courses/1'  ---
//   (cont..)  will return the course Object with id of 1 ie : Biology

// Otherwise it will return 'Course not found' if you supply an id that
//  (cont..) is not found on the array
