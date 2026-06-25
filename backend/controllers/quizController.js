const Quiz = require("../models/Quiz");

// ================= SUBMIT QUIZ =================

exports.submitQuiz = async (req, res) => {
  try {
    const {
      userId,
      topic,
      score,
      totalQuestions,
      percentage,
      difficulty,
    } = req.body;

    const quiz = await Quiz.create({
      userId,
      topic,
      score,
      totalQuestions,
      percentage,
      difficulty,
    });

    res.status(201).json({
      message: "Quiz saved successfully",
      quiz,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ================= ANALYTICS =================

exports.getAnalytics = async (req, res) => {
  try {
    const { userId } = req.params;

    const quizzes = await Quiz.find({ userId });

    const totalQuizzes = quizzes.length;

    const bestScore =
      quizzes.length > 0
        ? Math.max(...quizzes.map((q) => q.percentage))
        : 0;

    const avgScore =
      quizzes.length > 0
        ? (
            quizzes.reduce(
              (sum, q) => sum + Number(q.percentage),
              0
            ) / quizzes.length
          ).toFixed(1)
        : 0;

    res.json({
      totalQuizzes,
      bestScore,
      avgScore,
      quizzes,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ================= LEADERBOARD =================

exports.getLeaderboard = async (req, res) => {
  try {
    const leaderboard = await Quiz.aggregate([
      {
        $group: {
          _id: "$userId",
          totalScore: { $sum: "$percentage" },
          quizzesTaken: { $sum: 1 },
          avgScore: { $avg: "$percentage" },
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "_id",
          foreignField: "_id",
          as: "user",
        },
      },
      {
        $unwind: "$user",
      },
      {
        $sort: {
          totalScore: -1,
        },
      },
    ]);

    res.json(leaderboard);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};