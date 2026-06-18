const { generateQuiz } = require("../services/aiService");

exports.generateAIQuiz = async (req, res) => {
  try {
    console.log("BODY:", req.body);

    const { topic, difficulty } = req.body;

    if (!topic) {
      return res.status(400).json({
        message: "Topic is required",
      });
    }

    const quiz = await generateQuiz(topic, difficulty);

    return res.json({
      success: true,
      questions: quiz.questions,
    });

  } catch (error) {
    console.log("AI ERROR:", error);

    return res.status(500).json({
      message: error.message,
    });
  }
};