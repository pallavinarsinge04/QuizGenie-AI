exports.generateQuiz = async (req, res) => {
  try {
    const { topic, difficulty } = req.body;

    if (!topic) {
      return res.status(400).json({
        message: "Topic required",
      });
    }

    // MOCK DATA (for testing first)
    const questions = [
      {
        question: `What is ${topic}?`,
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A",
      },
      {
        question: `Why use ${topic}?`,
        options: ["Speed", "UI", "Backend", "Database"],
        answer: "UI",
      },
    ];

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