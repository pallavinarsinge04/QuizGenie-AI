const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// ================= SAFE JSON =================
function safeParse(text) {
  try {
    return JSON.parse(text);
  } catch (e) {
    const cleaned = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return JSON.parse(cleaned);
  }
}

exports.generateQuiz = async (req, res) => {
  try {
    const { topic, difficulty } = req.body;

    if (!topic) {
      return res.status(400).json({ message: "Topic required" });
    }

    let count = 10;
    if (difficulty === "Easy") count = 10;
    if (difficulty === "Medium") count = 30;
    if (difficulty === "Hard") count = 50;

    const prompt = `
Generate ${count} multiple-choice quiz questions on "${topic}".

Rules:
- 4 options per question
- Only 1 correct answer
- Return ONLY valid JSON (no markdown)

FORMAT:
{
  "questions": [
    {
      "question": "",
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
            "You are a strict JSON generator. Return ONLY valid JSON. No explanations.",
        },
        { role: "user", content: prompt },
      ],
      temperature: 0.7,
    });

    const content = response.choices[0].message.content;

    console.log("GPT RAW RESPONSE:", content); // 🔥 DEBUG

    const data = safeParse(content);

    return res.json(data);
  } catch (error) {
    console.log("AI ERROR:", error.message);

    return res.status(500).json({
      message: "Quiz generation failed",
      error: error.message,
    });
  }
};