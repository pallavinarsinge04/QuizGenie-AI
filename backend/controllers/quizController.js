exports.getAnalytics = async (req, res) => {
  try {
    const { userId } = req.params;

    const quizzes = await Quiz.find({ userId });

    const totalQuizzes = quizzes.length;

    const bestScore =
      quizzes.length > 0
        ? Math.max(...quizzes.map(q => q.percentage))
        : 0;

    const avgScore =
      quizzes.length > 0
        ? (
            quizzes.reduce(
              (sum, q) => sum + q.percentage,
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