const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    topic: String,
    score: Number,
    totalQuestions: Number,
    answers: Array,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Quiz", quizSchema);