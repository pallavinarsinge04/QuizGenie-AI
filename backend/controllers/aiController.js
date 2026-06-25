const javaQuestions = require("../data/javaQuestions");
const reactQuestions = require("../data/reactQuestions");
const pythonQuestions = require("../data/pythonQuestions");

exports.generateQuiz = async (req, res) => {
  const { topic, difficulty } = req.body;

  let questions = [];

  if (topic.toLowerCase() === "java") {
    questions = javaQuestions;
  } else if (topic.toLowerCase() === "react") {
    questions = reactQuestions;
  } else if (topic.toLowerCase() === "python") {
    questions = pythonQuestions;
  }

  let count = 10;

  if (difficulty === "Easy") count = 10;
  if (difficulty === "Medium") count = 30;
  if (difficulty === "Hard") count = 50;

  const result = [];

  while (result.length < count) {
    result.push(
      questions[Math.floor(Math.random() * questions.length)]
    );
  }

  res.json({
    questions: result,
  });
};