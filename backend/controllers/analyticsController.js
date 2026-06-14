const QuizResult = require("../models/QuizResult");
const Flashcard = require("../models/Flashcard");

exports.getAnalytics = async (req, res) => {
  try {
    const totalQuizzes = await QuizResult.countDocuments();
    const totalFlashcards = await Flashcard.countDocuments();

    const results = await QuizResult.find();

    const averageScore =
      results.length > 0
        ? results.reduce((sum, item) => sum + item.percentage, 0) /
          results.length
        : 0;

    const bestScore =
      results.length > 0
        ? Math.max(...results.map((item) => item.percentage))
        : 0;

    res.json({
      totalQuizzes,
      totalFlashcards,
      averageScore,
      bestScore,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};