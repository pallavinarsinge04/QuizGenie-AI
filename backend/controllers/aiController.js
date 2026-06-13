exports.generateQuestions = async (req, res) => {
  const { topic } = req.body;

  // MOCK AI RESPONSE (replace with OpenAI later)
  const questions = [
    {
      question: `What is ${topic}?`,
      answer: "AI generated answer",
    },
    {
      question: `Explain basics of ${topic}`,
      answer: "AI explanation",
    },
  ];

  res.json({ topic, questions });
};