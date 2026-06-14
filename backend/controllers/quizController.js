const QuizResult = require("../models/QuizResult");

exports.saveResult = async (req, res) => {
  try {
    const result = await QuizResult.create(req.body);

    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getResults = async (req, res) => {
  try {
    const results = await QuizResult.find().sort({
      createdAt: -1,
    });

    res.json(results);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};