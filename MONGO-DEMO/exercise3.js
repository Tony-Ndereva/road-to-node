const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/mongo-exercises")
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error("Failed to connect to the database", err));

const courseSchema = new mongoose.Schema({
  _id: String,
  tags: [String],
  author: String,
  date: { type: Date, default: Date.now },
  name: String,
  isPublished: Boolean,
  price: Number,
  version: Number,
});

const Course = mongoose.model("courses", courseSchema);

// async function getCourses() {
//   return await Course.find({ isPublished: true }).or([
//     { price: { $gte: 15 } },
//     { name: /.*by.*/i },
//   ]);
// }
// async function run() {
//   const courses = await getCourses();

//   console.log(courses);
// }
// async function updateCourse(id) {
//   const course = await Course.findById(id);
//   if (!course) return;
//   course.set({
//     isPublished: false,
//     author: "Another author",
//     price: 25,
//   });
//   const result = await course.save();
//   console.log(result);
// }
// updateCourse("5a68ff090c553064a218a547");
async function updateCourse(){
  const course = await Course.updateOne({_id : id},{
    
  } )
}

// BrB gonna be right back after FinalExams