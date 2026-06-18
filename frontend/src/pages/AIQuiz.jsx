import { useState } from "react";
import API from "../api/axios";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "./AIQuiz.css";

function AIQuiz() {
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");
  const [questions, setQuestions] = useState([]);

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(false);

  // ================= GENERATE QUIZ =================
  const generateQuiz = async () => {
    try {
      if (!topic) {
        alert("Please enter topic");
        return;
      }

      setLoading(true);
      setScore(null);
      setSelectedAnswers({});

      const res = await API.post("/ai/generate", {
        topic,
        difficulty,
      });

      setQuestions(res.data.questions || []);
    } catch (error) {
      console.log(error.response?.data || error.message);
      alert("Failed to generate quiz");
    } finally {
      setLoading(false);
    }
  };

  // ================= SELECT ANSWER =================
  const handleSelect = (qIndex, option) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [qIndex]: option,
    }));
  };

  // ================= SUBMIT QUIZ =================
  const submitQuiz = () => {
    let newScore = 0;

    questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.answer) {
        newScore++;
      }
    });

    setScore(newScore);
  };

  return (
    <div className="layout">
      <Sidebar />

      <div className="main-content">
        <Navbar />

        {/* ================= HEADER ================= */}
        <div className="quiz-header">
          <h1>🤖 AI Quiz Generator</h1>
          <p>Generate, Solve & Improve Your Skills</p>
        </div>

        {/* ================= INPUT SECTION ================= */}
        <div className="quiz-box">
          <input
            type="text"
            placeholder="Enter Topic (React, Java, Python...)"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />

          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>

          <button onClick={generateQuiz}>
            {loading ? "Generating..." : "Generate Quiz"}
          </button>
        </div>

        {/* ================= SCORE ================= */}
        {score !== null && (
          <div className="score-box">
            🎯 Your Score: {score} / {questions.length}
          </div>
        )}

        {/* ================= QUESTIONS ================= */}
        <div className="question-list">
          {questions.map((q, index) => (
            <div className="question-card" key={index}>
              <h3>
                {index + 1}. {q.question}
              </h3>

              {q.options?.map((opt, i) => (
                <div
                  key={i}
                  className={`option ${
                    selectedAnswers[index] === opt ? "selected" : ""
                  }`}
                  onClick={() => handleSelect(index, opt)}
                >
                  {opt}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* ================= SUBMIT ================= */}
        {questions.length > 0 && (
          <button className="submit-btn" onClick={submitQuiz}>
            Submit Quiz
          </button>
        )}
      </div>
    </div>
  );
}

export default AIQuiz;