const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String,

 profileImage: {
    type: String,
    default: "",
},
  resume: String,
});

module.exports = mongoose.model("User", userSchema);