const Quiz = require("./../models/Quiz");

exports.getLeaderboard = async (req, res) => {
  try {
    const leaderboard = await Quiz.aggregate([
      {
        $group: {
          _id: "$userId",
          totalScore: {
            $sum: "$percentage",
          },
          quizzesTaken: {
            $sum: 1,
          },
          avgScore: {
            $avg: "$percentage",
          },
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