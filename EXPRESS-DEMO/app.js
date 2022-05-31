const express = require("express");
const app = express();
const courses = [
  { id: 1, name: "Biology" },
  { id: 2, name: "Chemistry" },
  { id: 3, name: "Physics" },
];
app.get("/", (req, res) => {
  res.send("Hello world!!");
});
app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send("Course was not found");
  res.send(course);
});
const port = process.env.PORT || 3000;
// On terminal , i have set PORT = 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}.....`);
});

// OUTPUT ON BROWER:
// when you load url : 'localhost:5000/api/courses/1'  ---
//   (cont..)  will return the course Object with id of 1 ie : Biology

// Otherwise it will return 'Course not found' if you supply an id that
//  (cont..) is not found on the array
