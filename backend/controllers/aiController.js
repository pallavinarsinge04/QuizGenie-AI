// aiController.js

const javaQuestions = require("../data/javaQuestions");
const pythonQuestions = require("../data/pythonQuestions");
const reactQuestions = require("../data/reactQuestions");

exports.generateQuiz = async (req, res) => {
  try {
    const { topic, difficulty } = req.body;

    let questions = [];

    if (topic.toLowerCase() === "java") {
      questions = javaQuestions;
    } else if (topic.toLowerCase() === "python") {
      questions = pythonQuestions;
    } else if (topic.toLowerCase() === "react") {
      questions = reactQuestions;
    }

    let count = 10;

    if (difficulty === "Medium") count = 30;
    if (difficulty === "Hard") count = 50;

    res.json({
      questions: questions.slice(0, count),
    });
  } catch (error) {
    res.status(500).json({
      message: "Quiz generation failed",
      error: error.message,
    });
  }
};