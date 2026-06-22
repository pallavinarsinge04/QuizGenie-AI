const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

exports.generateQuiz = async (req, res) => {
  try {
    const { topic, difficulty } = req.body;

    let count = 10;

    if (difficulty === "Easy") count = 10;
    else if (difficulty === "Medium") count = 30;
    else if (difficulty === "Hard") count = 50;

    const prompt = `
Generate ${count} multiple-choice questions on "${topic}".
Difficulty: ${difficulty}

Return ONLY valid JSON in this format:

{
  "questions": [
    {
      "question": "...",
      "options": ["A", "B", "C", "D"],
      "answer": "correct option"
    }
  ]
}
`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are an expert quiz generator. Return only JSON.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
    });

    let content = response.choices[0].message.content;

    // convert string → JSON
    const data = JSON.parse(content);

    return res.json(data);
  } catch (err) {
    console.log("AI ERROR:", err.message);

    return res.status(500).json({
      message: "AI quiz generation failed",
    });
  }
};