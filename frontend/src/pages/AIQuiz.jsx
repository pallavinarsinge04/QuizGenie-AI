import { useState, useEffect, useRef } from "react";
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

  const [correctMap, setCorrectMap] = useState({});

  // ================= PAUSE STATE =================
  const [isPaused, setIsPaused] = useState(false);

  const timerRef = useRef(null);

  // ================= TIMER =================
  useEffect(() => {
    if (questions.length === 0 || submitted) return;
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          submitQuiz(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [questions, submitted, isPaused]);

  // ================= GENERATE QUIZ =================
  const generateQuiz = async () => {
    try {
      if (!topic) {
        alert("Enter topic");
        return;
      }

      setLoading(true);
      setScore(null);
      setSelectedAnswers({});
      setSubmitted(false);
      setCorrectMap({});
      setIsPaused(false);

      const res = await API.post("/ai/generate", {
        topic,
        difficulty,
      });

      const data = res.data.questions || [];

      setQuestions(data);

      const map = {};
      data.forEach((q, i) => {
        map[i] = q.answer;
      });
      setCorrectMap(map);

      if (difficulty === "Easy") {
        setQuizMarks(20);
        setTimeLeft(600);
      } else if (difficulty === "Medium") {
        setQuizMarks(50);
        setTimeLeft(1800);
      } else {
        setQuizMarks(100);
        setTimeLeft(3000);
      }

    } catch (err) {
      console.log(err);
      alert("Quiz generation failed");
    } finally {
      setLoading(false);
    }
  };

  // ================= PAUSE / RESUME =================
  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  // ================= SELECT ANSWER =================
  const handleSelect = (i, opt) => {
    if (submitted) return;

    setSelectedAnswers((prev) => ({
      ...prev,
      [i]: opt,
    }));
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
      alert("⏰ Time Over! Auto Submitted");
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

        {/* TIMER + PAUSE */}
        {questions.length > 0 && !submitted && (
          <div className="timer-card">
            ⏰ {Math.floor(timeLeft / 60)}:
            {(timeLeft % 60).toString().padStart(2, "0")}

            <button
              onClick={togglePause}
              style={{
                marginLeft: "20px",
                padding: "5px 10px",
                cursor: "pointer",
              }}
            >
              {isPaused ? "Resume ▶" : "Pause ⏸"}
            </button>
          </div>
        )}

        {/* STATUS */}
        {isPaused && (
          <div className="pause-banner">
            ⏸ Quiz Paused
          </div>
        )}

        {/* SCORE */}
        {score !== null && (
          <div className="score-box">
            <h2>Score: {score.toFixed(0)} / {quizMarks}</h2>
            <h3>
              {percentage >= 40 ? "✅ Pass" : "❌ Fail"}
            </h3>
          </div>
        )}

        {/* QUESTIONS */}
        <div className="question-list">
          {questions.map((q, i) => (
            <div className="question-card" key={i}>
              <h3>{q.question}</h3>

              {q.options?.map((opt, j) => {
                const isSelected = selectedAnswers[i] === opt;
                const isCorrect = correctMap[i] === opt;

                return (
                  <div
                    key={j}
                    className={`option
                      ${isSelected ? "selected" : ""}
                      ${submitted && isCorrect ? "correct" : ""}
                      ${submitted && isSelected && !isCorrect ? "wrong" : ""}
                    `}
                    onClick={() => handleSelect(i, opt)}
                  >
                    {opt}
                  </div>
                );
              })}
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