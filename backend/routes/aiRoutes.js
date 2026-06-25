const express = require("express");
const router = express.Router();

const {
  chatAI,
  generateQuiz,
} = require("../controllers/aiController");

router.post("/chat", chatAI);

router.post("/generate", generateQuiz);

module.exports = router;