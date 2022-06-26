const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error("Failed to connect to database", err));

// Creating a schema for our courseDatabase
const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
});

const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
  const course = new Course({
    name: "Angular Course",
    author: "Tony",
    tags: ["Angular", "front-end"],
    isPublished: true,
  });
  const result = await course.save();
  //console.log(result);
}

// Retrieving documents from MongoDB

async function getCourses() {
  const courses = await Course.find({
    author: "Tony",
    isPublished: true,
  })
    .limit(10)
    .sort({ name: 1 })
    .select({ name: 1, tags: 1 });

  console.log(courses);
}

getCourses();
