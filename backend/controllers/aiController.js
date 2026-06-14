const { generateQuiz } = require("../services/aiService");

exports.generateAIQuiz = async (req, res) => {
  try {
    const { topic, difficulty } = req.body;

    const quiz = await generateQuiz(topic, difficulty);

    res.json(quiz);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};