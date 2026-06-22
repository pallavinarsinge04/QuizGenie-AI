import { useState, useEffect } from "react";
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
  const [timeLeft, setTimeLeft] = useState(0);
  const [quizMarks, setQuizMarks] = useState(20);
  const [submitted, setSubmitted] = useState(false);

  // ================= TIMER =================
  useEffect(() => {
    if (timeLeft <= 0 || submitted || questions.length === 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          autoSubmitQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, submitted, questions]);

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
      setSubmitted(false);

      const res = await API.post("/ai/generate", {
        topic,
        difficulty,
      });

      setQuestions(res.data.questions || []);

      // difficulty settings
      if (difficulty === "Easy") {
        setQuizMarks(20);
        setTimeLeft(600);
      } else if (difficulty === "Medium") {
        setQuizMarks(50);
        setTimeLeft(1200);
      } else {
        setQuizMarks(100);
        setTimeLeft(1800);
      }
    } catch (error) {
      console.log(error);
      alert("Failed to generate quiz");
    } finally {
      setLoading(false);
    }
  };

  // ================= SELECT ANSWER =================
  const handleSelect = (index, option) => {
    if (submitted) return;

    setSelectedAnswers((prev) => ({
      ...prev,
      [index]: option,
    }));
  };

  // ================= AUTO SUBMIT =================
  const autoSubmitQuiz = () => {
    submitQuiz(true);
  };

  // ================= SUBMIT QUIZ =================
  const submitQuiz = (auto = false) => {
    let correct = 0;

    questions.forEach((q, i) => {
      if (selectedAnswers[i] === q.answer) {
        correct++;
      }
    });

    const marksPerQ = quizMarks / questions.length;
    const finalScore = correct * marksPerQ;

    setScore(finalScore);
    setSubmitted(true);

    if (auto) {
      alert("Time up! Quiz auto submitted.");
    }
  };

  const percentage =
    score !== null ? (score / quizMarks) * 100 : 0;

  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content">
        <Navbar />

        <h1>🤖 AI Quiz Generator</h1>

        {/* INPUT */}
        <div className="quiz-box">
          <input
            placeholder="Enter Topic"
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

        {/* TIMER */}
        {questions.length > 0 && !submitted && (
          <div className="timer-card">
            ⏰ Time Left: {Math.floor(timeLeft / 60)}:
            {(timeLeft % 60).toString().padStart(2, "0")}
          </div>
        )}

        {/* SCORE */}
        {score !== null && (
          <div className="score-box">
            <h2>Score: {score.toFixed(0)} / {quizMarks}</h2>
            <h3>Percentage: {percentage.toFixed(0)}%</h3>
            <h3>
              Status: {percentage >= 40 ? "Pass" : "Fail"}
            </h3>
          </div>
        )}

        {/* QUESTIONS */}
        <div className="question-list">
          {questions.map((q, i) => (
            <div className="question-card" key={i}>
              <h3>{q.question}</h3>

              {q.options?.map((opt, j) => (
                <div
                  key={j}
                  className={`option ${
                    selectedAnswers[i] === opt ? "selected" : ""
                  }`}
                  onClick={() => handleSelect(i, opt)}
                >
                  {opt}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* SUBMIT */}
        {questions.length > 0 && (
          <button
            className="submit-btn"
            disabled={submitted}
            onClick={() => submitQuiz(false)}
          >
            {submitted ? "Submitted" : "Submit Quiz"}
          </button>
        )}
      </div>
    </div>
  );
}

export default AIQuiz;