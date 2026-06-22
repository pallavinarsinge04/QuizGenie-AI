exports.generateQuiz = async (req, res) => {
  try {
    const { topic, difficulty } = req.body;

    let count = 10;

    if (difficulty === "Easy") count = 10;
    else if (difficulty === "Medium") count = 30;
    else if (difficulty === "Hard") count = 50;

    // 🔥 IMPORTANT: generate correct number of questions
    const questions = [];

    for (let i = 1; i <= count; i++) {
      questions.push({
        question: `${topic} Question ${i}`,
        options: ["A", "B", "C", "D"],
        answer: "A",
      });
    }

    return res.json({
      questions,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Quiz generation failed",
    });
  }
};