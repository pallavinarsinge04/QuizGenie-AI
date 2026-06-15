const mongoose = require("mongoose");

const battleSchema = new mongoose.Schema(
  {
    player1: {
      type: String,
      required: true,
    },

    player2: {
      type: String,
      default: "",
    },

    topic: {
      type: String,
      required: true,
    },

    score1: {
      type: Number,
      default: 0,
    },

    score2: {
      type: Number,
      default: 0,
    },

    winner: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      default: "Waiting",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Battle", battleSchema);