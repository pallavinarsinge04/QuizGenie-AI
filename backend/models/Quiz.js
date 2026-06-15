const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema(
  {
    topic: String,

    score: Number,

    totalQuestions: Number,

    percentage: Number,

    userId: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Quiz", quizSchema);