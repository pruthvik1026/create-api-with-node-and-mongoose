const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/olympic"
).then(() => {
  console.log("successfull");
}).catch((e) => {
  console.log("failed",e);
})