const mongoose = require("mongoose");

const certificateSchema = new mongoose.Schema(
  {
    name: String,

    title: String,

    score: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Certificate",
  certificateSchema
);