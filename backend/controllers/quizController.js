const Quiz = require("../models/Quiz");

exports.submitQuiz = async (req, res) => {
  try {
    const {
      userId,
      topic,
      score,
      totalQuestions,
      difficulty,
    } = req.body;

    const percentage = (
      (score / totalQuestions) *
      100
    ).toFixed(1);

    const quiz = await Quiz.create({
      userId,
      topic,
      score,
      totalQuestions,
      percentage,
      difficulty,
    });

    res.status(201).json(quiz);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};