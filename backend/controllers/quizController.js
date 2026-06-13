const Quiz = require("../models/Quiz");

exports.saveQuiz = async (req, res) => {
  const quiz = await Quiz.create({
    userId: req.user,
    ...req.body,
  });

  res.json(quiz);
};

exports.getQuizzes = async (req, res) => {
  const quizzes = await Quiz.find({ userId: req.user });
  res.json(quizzes);
};