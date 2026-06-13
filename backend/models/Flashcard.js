const mongoose = require("mongoose");

const flashcardSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    question: String,
    answer: String,
    topic: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Flashcard", flashcardSchema);