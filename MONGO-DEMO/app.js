const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("connected to MongoDB..."))
  .catch((err) => console.log("Could not connect to MongoDB", err));
