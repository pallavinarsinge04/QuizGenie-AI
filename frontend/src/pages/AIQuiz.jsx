import { useState, useEffect } from "react";
import API from "../api/axios";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "./AIQuiz.css";

function AIQuiz() {
const user = JSON.parse(localStorage.getItem("user"));

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

useEffect(() => {
if (questions.length === 0 || submitted) return;


const interval = setInterval(() => {
  setTimeLeft((prev) => {
    if (prev <= 1) {
      clearInterval(interval);
      submitQuiz(true);
      return 0;
    }

    return prev - 1;
  });
}, 1000);

return () => clearInterval(interval);


}, [questions, submitted]);

const generateQuiz = async () => {
try {
if (!topic) {
alert("Please enter a topic");
return;
}


  setLoading(true);
  setScore(null);
  setSubmitted(false);
  setSelectedAnswers({});
  setCorrectMap({});

  const res = await API.post("/ai/generate", {
    topic,
    difficulty,
  });

  const quizQuestions = res.data.questions || [];

  setQuestions(quizQuestions);

  const map = {};
  quizQuestions.forEach((q, i) => {
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
} catch (error) {
  console.log(error);
  alert("Quiz generation failed");
} finally {
  setLoading(false);
}


};

const handleSelect = (index, option) => {
if (submitted) return;


setSelectedAnswers((prev) => ({
  ...prev,
  [index]: option,
}));


};

const submitQuiz = async (auto = false) => {
let correct = 0;


questions.forEach((q, index) => {
  if (selectedAnswers[index] === q.answer) {
    correct++;
  }
});

const marksPerQuestion =
  quizMarks / questions.length;

const finalScore =
  correct * marksPerQuestion;

const percentage =
  ((finalScore / quizMarks) * 100).toFixed(1);

setScore(finalScore);
setSubmitted(true);

try {
  await API.post("/quiz/submit", {
    userId: user?._id,
    topic,
    score: correct,
    totalQuestions: questions.length,
    percentage,
    difficulty,
  });

  console.log("Quiz saved successfully");
} catch (error) {
  console.log(
    "Quiz save error:",
    error.response?.data || error.message
  );
}

if (auto) {
  alert("⏰ Time Over! Quiz Auto Submitted");
}

};

const percentage =
score !== null
? ((score / quizMarks) * 100).toFixed(1)
: 0;

return ( <div className="layout"> <Sidebar />

```
  <div className="main-content">
    <Navbar />

    <h1>🤖 AI Quiz Generator</h1>

    <div className="quiz-box">
      <input
        type="text"
        placeholder="Enter Topic (React, Java, Python)"
        value={topic}
        onChange={(e) =>
          setTopic(e.target.value)
        }
      />

      <select
        value={difficulty}
        onChange={(e) =>
          setDifficulty(e.target.value)
        }
      >
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
      </select>

      <button onClick={generateQuiz}>
        {loading
          ? "Generating..."
          : "Generate Quiz"}
      </button>
    </div>

    {questions.length > 0 &&
      !submitted && (
        <div className="timer-card">
          ⏰ {Math.floor(timeLeft / 60)}:
          {(timeLeft % 60)
            .toString()
            .padStart(2, "0")}
        </div>
      )}

    {score !== null && (
      <div className="score-box">
        <h2>
          Score: {score.toFixed(0)} /{" "}
          {quizMarks}
        </h2>

        <h3>
          Percentage: {percentage}%
        </h3>

        <h3>
          {percentage >= 40
            ? "✅ Pass"
            : "❌ Fail"}
        </h3>
      </div>
    )}

    <div className="question-list">
      {questions.map((q, index) => (
        <div
          className="question-card"
          key={index}
        >
          <h3>
            {index + 1}. {q.question}
          </h3>

          {q.options?.map(
            (option, optionIndex) => {
              const isSelected =
                selectedAnswers[index] ===
                option;

              const isCorrect =
                correctMap[index] ===
                option;

              return (
                <div
                  key={optionIndex}
                  className={`option
                    ${
                      isSelected
                        ? "selected"
                        : ""
                    }
                    ${
                      submitted &&
                      isCorrect
                        ? "correct"
                        : ""
                    }
                    ${
                      submitted &&
                      isSelected &&
                      !isCorrect
                        ? "wrong"
                        : ""
                    }
                  `}
                  onClick={() =>
                    handleSelect(
                      index,
                      option
                    )
                  }
                >
                  {option}
                </div>
              );
            }
          )}

          {submitted && (
            <div className="answer-box">
              ✅ Correct Answer:
              <strong>
                {" "}
                {q.answer}
              </strong>
            </div>
          )}
        </div>
      ))}
    </div>

    {questions.length > 0 && (
      <button
        className="submit-btn"
        onClick={() =>
          submitQuiz(false)
        }
        disabled={submitted}
      >
        {submitted
          ? "Submitted"
          : "Submit Quiz"}
      </button>
    )}
  </div>
</div>


);
}

export default AIQuiz;
