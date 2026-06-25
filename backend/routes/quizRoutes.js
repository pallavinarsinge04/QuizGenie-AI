const express = require("express");
const router = express.Router();

const {
  submitQuiz,
  getAnalytics,
  getLeaderboard,
} = require("../controllers/quizController");

router.post("/submit", submitQuiz);

router.get(
  "/analytics/:userId",
  getAnalytics
);

router.get(
  "/leaderboard",
  getLeaderboard
);

module.exports = router;