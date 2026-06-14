const express = require("express");

const router = express.Router();

const {
  saveResult,
  getResults,
} = require("../controllers/quizController");

router.post("/", saveResult);

router.get("/", getResults);

module.exports = router;