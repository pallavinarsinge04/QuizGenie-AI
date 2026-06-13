const OpenAI = require("openai");

// Initialize OpenAI
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// GENERATE QUIZ QUESTIONS
exports.generateQuestions = async (req, res) => {
  try {
    const { topic, difficulty } = req.body;

    const prompt = `
You are an expert teacher AI.

Generate 5 multiple-choice quiz questions.

Topic: ${topic}
Difficulty: ${difficulty}

Return ONLY valid JSON in this format:
{
  "questions": [
    {
      "question": "",
      "options": ["A", "B", "C", "D"],
      "answer": ""
    }
  ]
}
`;

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You generate structured quiz data." },
        { role: "user", content: prompt }
      ],
      temperature: 0.7,
    });

    const text = response.choices[0].message.content;

    // convert AI string → JSON
    const data = JSON.parse(text);

    res.json({
      topic,
      difficulty,
      ...data,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "AI generation failed",
      error: error.message,
    });
  }
};