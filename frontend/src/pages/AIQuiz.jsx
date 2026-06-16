import { useState } from "react";
import API from "../api/axios";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "./AIQuiz.css";

function AIQuiz() {
  const [topic, setTopic] = useState("");
  const [questions, setQuestions] = useState([]);

  const generateQuiz = async () => {
    try {
      const res = await API.post("/ai/generate", {
        topic,
      });

      setQuestions(res.data.questions || []);
    } catch (error) {
      console.log(error);
      alert("Failed to generate quiz");
    }
  };

  return (
    <div className="layout">
      <Sidebar />

      <div className="main-content">
        <Navbar />

        <div className="quiz-container">
          <h1>🤖 AI Quiz Generator</h1>

          <div className="search-box">
            <input
              type="text"
              placeholder="Enter Topic (React, Java, Python...)"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />

            <button onClick={generateQuiz}>
              Generate Quiz
            </button>
          </div>

          <div className="question-list">
            {questions.map((item, index) => (
              <div className="question-card" key={index}>
                <h3>
                  {index + 1}. {item.question}
                </h3>

                {item.options?.map((option, i) => (
                  <div className="option" key={i}>
                    {option}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIQuiz;