import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "./QuizHistory.css";

function QuizHistory() {
  const [history] = useState([
    {
      id: 1,
      topic: "React",
      score: 9,
      total: 10,
      percentage: 90,
      date: "20-Jun-2026",
    },
    {
      id: 2,
      topic: "Java",
      score: 8,
      total: 10,
      percentage: 80,
      date: "18-Jun-2026",
    },
    {
      id: 3,
      topic: "Python",
      score: 10,
      total: 10,
      percentage: 100,
      date: "15-Jun-2026",
    },
  ]);

  const totalQuiz = history.length;

  const bestScore = Math.max(...history.map((q) => q.percentage));

  const avg =
    history.reduce((a, b) => a + b.percentage, 0) /
    history.length;

  return (
    <div className="history-layout">
      <Sidebar />

      <div className="history-main">
        <Navbar />

        <div className="history-container">
          <h1>📝 Quiz History</h1>

          <div className="history-cards">
            <div className="stat-box">
              <h2>{totalQuiz}</h2>
              <p>Total Quizzes</p>
            </div>

            <div className="stat-box">
              <h2>{bestScore}%</h2>
              <p>Best Score</p>
            </div>

            <div className="stat-box">
              <h2>{avg.toFixed(1)}%</h2>
              <p>Average Score</p>
            </div>
          </div>

          <input
            className="search"
            placeholder="Search by Topic..."
          />

          <table className="history-table">
            <thead>
              <tr>
                <th>Topic</th>
                <th>Score</th>
                <th>Total</th>
                <th>Percentage</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {history.map((quiz) => (
                <tr key={quiz.id}>
                  <td>{quiz.topic}</td>
                  <td>{quiz.score}</td>
                  <td>{quiz.total}</td>
                  <td>{quiz.percentage}%</td>
                  <td>{quiz.date}</td>

                  <td>
                    {quiz.percentage >= 70 ? (
                      <span className="pass">Pass</span>
                    ) : (
                      <span className="fail">Fail</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default QuizHistory;