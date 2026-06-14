const express = require("express");

const router = express.Router();

const {
  generateAIQuiz,
} = require("../controllers/aiController");

router.post("/generate", generateAIQuiz);

module.exports = router;