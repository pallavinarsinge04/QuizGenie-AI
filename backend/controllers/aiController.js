const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// ================= CHAT =================
exports.chatAI = async (req, res) => {
  try {
    const { messages } = req.body;

    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages,
      temperature: 0.7,
      max_tokens: 1024,
    });

    res.json({
      reply: response.choices[0].message.content,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "AI Chat Failed",
      error: error.message,
    });
  }
};

// ================= QUIZ =================
exports.generateQuiz = async (req, res) => {
  try {
    const { topic, difficulty } = req.body;

    let count = 10;

    if (difficulty === "Medium") count = 30;
    if (difficulty === "Hard") count = 50;

    const prompt = `
Generate ${count} multiple choice questions about ${topic}.

Return ONLY valid JSON.

Format:

{
  "questions":[
    {
      "question":"...",
      "options":["A","B","C","D"],
      "answer":"..."
    }
  ]
}
`;

    const response =
      await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.7,
      });

    let content =
      response.choices[0].message.content;

    content = content
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const data = JSON.parse(content);

    res.json(data);
  } catch (error) {
    console.log("QUIZ ERROR:", error);

    res.status(500).json({
      message: "Quiz generation failed",
      error: error.message,
    });
  }
};