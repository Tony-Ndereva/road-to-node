const express = require("express");
const router = express.Router();
const { AuthSchema } = require("./validate_schema");





const courses = [
  { id: 1, name: "Biology" },
  { id: 2, name: "Chemistry" },
  { id: 3, name: "Physics" },
];


router.get("/", (req, res) => {
  res.send(courses);
});
router.get("/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send("Course was not found");
  res.send(course);
});
router.post("/", (req, res) => {
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
router.put("/:id", (req, res) => {
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

router.delete("/:id", (req, res) => {
  // Look for the course
  const course = courses.find((c) => c.id === parseInt(req.params.id));

  if (!course) return res.status(404).send("Course is not available");

  //Delete
  const index = courses.indexOf(course);
  courses.splice(index, 1);
  for (let key in course)
    res.send(`course ${key}  has been deleted successfully`);
});
module.exports = router;
