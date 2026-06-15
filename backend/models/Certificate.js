const mongoose = require("mongoose");

const certificateSchema = new mongoose.Schema(
  {
    user: String,

    course: String,

    issuedDate: Date,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Certificate",
  certificateSchema
);