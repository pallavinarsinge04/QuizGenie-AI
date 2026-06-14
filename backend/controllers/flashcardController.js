const Flashcard = require("../models/Flashcard");

// Create
exports.createFlashcard = async (req, res) => {
  try {
    const flashcard = await Flashcard.create(req.body);
    res.status(201).json(flashcard);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Read All
exports.getFlashcards = async (req, res) => {
  try {
    const flashcards = await Flashcard.find().sort({ createdAt: -1 });
    res.json(flashcards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update
exports.updateFlashcard = async (req, res) => {
  try {
    const flashcard = await Flashcard.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(flashcard);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete
exports.deleteFlashcard = async (req, res) => {
  try {
    await Flashcard.findByIdAndDelete(req.params.id);

    res.json({
      message: "Flashcard deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};