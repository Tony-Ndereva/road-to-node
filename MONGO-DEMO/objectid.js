const mongoose = require('mongoose')
const id = new mongoose.Types.ObjectId()
console.log(id.getTimestamp())
// an id has 24 characters
// every 2 characters represent a byte
// // first 4 bytes represent timestamp
// then next 3 bytes represent machine identifier
// then next2 bytes represent process identifier
// finally the last 3 bytes represent counter