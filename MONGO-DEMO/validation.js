const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/mongo-exercises")
  .then(() => console.log("connected to the datatbase"))
  .catch((err) => console.error("Failed to connect to the database", err));

const courseSchema = new mongoose.Schema({
  _id: String,
  tags: [String],
  author: String,
  date: { type: Date, default: Date.now },
  name: { type: String, required: true },
  isPublished: Boolean,
  price: Number,
  version: Number,
});
const Course = mongoose.model("courses", courseSchema);
async function createCourse() {
  const course = new Course({
    // author: "Mosh",
    tags: ["sweetCourse"],
    isPublished: true,
    price: 5523,
  });

  try {
    const result = await course.save();
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }  
}
createCourse();
