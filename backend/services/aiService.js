const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

exports.generateQuiz = async (topic, difficulty) => {
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });

  const prompt = `
Generate 5 MCQs on ${topic}.
Difficulty: ${difficulty}.

Return JSON:

{
  "questions":[
    {
      "question":"",
      "options":["","","",""],
      "answer":""
    }
  ]
}
`;

  const result = await model.generateContent(prompt);

  const text = result.response.text();

  return JSON.parse(text.replace(/```json|```/g, ""));
};