const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// ================= SAFE PARSER =================
function safeParse(text) {
  try {
    return JSON.parse(text);
  } catch (err) {
    const cleaned = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return JSON.parse(cleaned);
  }
}

// ================= GENERATE QUIZ =================
exports.generateQuiz = async (req, res) => {
  try {
    const { topic, difficulty } = req.body;

    let count = 10;
    if (difficulty === "Easy") count = 10;
    else if (difficulty === "Medium") count = 30;
    else if (difficulty === "Hard") count = 50;

    const prompt = `
Create ${count} multiple choice questions on "${topic}".
Difficulty: ${difficulty}

Return ONLY valid JSON:

{
  "questions": [
    {
      "question": "string",
      "options": ["A","B","C","D"],
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
          content:
            "You are a strict JSON generator. Always return only valid JSON. No markdown.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
    });

    let content = response.choices[0].message.content;

    console.log("RAW GPT RESPONSE:", content); // 🔥 IMPORTANT DEBUG

    const data = safeParse(content);

    return res.json(data);
  } catch (err) {
    console.log("AI ERROR:", err);

    return res.status(500).json({
      message: "Quiz generation failed",
      error: err.message,
    });
  }
};