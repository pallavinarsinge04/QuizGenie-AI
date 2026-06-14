const express = require("express");
const router = express.Router();

const {
  createFlashcard,
  getFlashcards,
  updateFlashcard,
  deleteFlashcard,
} = require("../controllers/flashcardController");

router.post("/", createFlashcard);

router.get("/", getFlashcards);

router.put("/:id", updateFlashcard);

router.delete("/:id", deleteFlashcard);

module.exports = router;