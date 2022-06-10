const express = require("express");
const app = express();
app.use(express.json());

const genre = require("./routes/genres");

// Since we are not working with a database,
// (cont..) we create an empty array to store our data
app.use("/api/genres", genre);
const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
