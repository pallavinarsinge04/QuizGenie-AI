const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

exports.chatAI = async (req, res) => {
  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({
        message: "Messages array required",
      });
    }

    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages,
      temperature: 0.7,
      max_tokens: 1024,
    });

    return res.json({
      reply: response.choices[0].message.content,
    });
  } catch (error) {
    console.error("GROQ ERROR:", error);

    return res.status(500).json({
      message: "AI Chat Failed",
      error: error.message,
    });
  }
};