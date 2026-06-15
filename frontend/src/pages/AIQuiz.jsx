import { useState } from "react";
import API from "../api/axios";

export default function AIQuiz() {
  const [topic, setTopic] = useState("");
  const [questions, setQuestions] = useState([]);

  const generateQuiz = async () => {
    try {
      const res = await API.post("/ai/generate", {
        topic,
      });

      setQuestions(res.data.questions || []);
    } catch (err) {
      alert("Quiz generation failed");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>AI Quiz Generator</h1>

      <input
        placeholder="Enter Topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />

      <button onClick={generateQuiz}>
        Generate
      </button>

      {questions.map((q, index) => (
        <div key={index}>
          <h3>{q.question}</h3>

          {q.options?.map((option, i) => (
            <p key={i}>{option}</p>
          ))}
        </div>
      ))}
    </div>
  );
}