const express = require("express");
const router = express.Router();

const {
  submitQuiz,
  getAnalytics,
} = require("../controllers/quizController");

router.post("/submit", submitQuiz);

router.get(
  "/analytics/:userId",
  getAnalytics
);

module.exports = router;