import { useState } from "react";
import API from "../api/axios";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "./AIQuiz.css";

function AIQuiz() {
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const generateQuiz = async () => {
    if (!topic) {
      alert("Please enter a topic");
      return;
    }

    setLoading(true);

    try {
      const res = await API.post("/ai/generate", {
        topic,
        difficulty,
      });

      setQuestions(res.data.questions || []);
    } catch (error) {
      console.log(error);
      alert("Failed to generate quiz");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="layout">
      <Sidebar />

      <div className="main-content">
        <Navbar />

        {/* ===== AI QUIZ HEADER SECTION ===== */}
        <div className="quiz-header">
          <h1>🤖 AI Quiz Generator</h1>
          <p>Create smart quizzes using AI instantly</p>
        </div>

        {/* ===== INPUT SECTION ===== */}
        <div className="quiz-input-section">
          <div className="input-card">
            <label>Enter Topic</label>
            <input
              type="text"
              placeholder="React, Java, Python..."
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
          </div>

          <div className="input-card">
            <label>Select Difficulty</label>
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>

          <div className="input-card button-card">
            <button onClick={generateQuiz} disabled={loading}>
              {loading ? "Generating..." : "Generate Quiz"}
            </button>
          </div>
        </div>

        {/* ===== QUIZ SECTION ===== */}
        <div className="quiz-section">
          {questions.length === 0 && !loading && (
            <div className="empty-state">
              <h3>No Quiz Generated Yet</h3>
              <p>Enter a topic and click generate</p>
            </div>
          )}

          {loading && (
            <div className="loading">
              <p>⏳ Generating AI Quiz...</p>
            </div>
          )}

          {questions.map((q, index) => (
            <div className="quiz-card" key={index}>
              <h3>
                {index + 1}. {q.question}
              </h3>

              <div className="options">
                {q.options?.map((opt, i) => (
                  <div className="option" key={i}>
                    {opt}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AIQuiz;