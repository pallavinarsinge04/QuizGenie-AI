const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },

    topic: String,

    score: Number,

    totalQuestions: Number,

    percentage: Number,

    difficulty: String,

    completedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "Quiz",
  quizSchema
);