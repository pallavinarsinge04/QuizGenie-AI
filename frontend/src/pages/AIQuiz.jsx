import { useState } from "react";
import API from "../api/axios";

function AIQuiz() {
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");
  const [questions, setQuestions] = useState([]);

  const generateQuiz = async () => {
    try {
      const res = await API.post("/ai/generate", {
        topic,
        difficulty,
      });

      setQuestions(res.data.questions);
    } catch (error) {
      console.log(error);
      alert("Failed to generate quiz");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>🤖 AI Quiz Generator</h1>

      <input
        type="text"
        placeholder="Enter Topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />

      <br /><br />

      <select
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
      >
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
      </select>

      <br /><br />

      <button onClick={generateQuiz}>
        Generate Quiz
      </button>

      <hr />

      {questions.map((item, index) => (
        <div
          key={index}
          style={{
            border: "1px solid gray",
            padding: "15px",
            marginTop: "15px",
          }}
        >
          <h3>
            {index + 1}. {item.question}
          </h3>

          {item.options.map((option, i) => (
            <p key={i}>• {option}</p>
          ))}
        </div>
      ))}
    </div>
  );
}
await API.post("/quiz", {
  topic,
  score,
  totalQuestions: questions.length,
  percentage,
});

export default AIQuiz;