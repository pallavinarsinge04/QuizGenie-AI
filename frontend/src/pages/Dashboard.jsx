import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "./Dashboard.css";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");

  const stats = {
    total: 12,
    attempted: 8,
    avgScore: 76,
    bestScore: 92,
  };

  const recentQuizzes = [
    { topic: "React Basics", score: 85 },
    { topic: "JavaScript ES6", score: 78 },
    { topic: "Node.js", score: 90 },
  ];

  const generateQuiz = () => {
    alert(`Generating quiz for ${topic} (${difficulty})`);
  };

  return (
    <div className="layout">
      <Sidebar />

      <div className="main-content">
        <Navbar />

        {/* ===== HEADER ===== */}
        <div>
          <h1>Welcome {user?.name || "User"} 👋</h1>
        
        </div>

       
        {/* ===== STATS ===== */}
        <h2 className="section-title">Your Quiz Stats</h2>

        <div className="stats-grid">
          <div className="stat-card">Total Quizzes: {stats.total}</div>
          <div className="stat-card">Attempted: {stats.attempted}</div>
          <div className="stat-card">Avg Score: {stats.avgScore}%</div>
          <div className="stat-card">Best Score: {stats.bestScore}%</div>
        </div>

        {/* ===== RECENT QUIZZES ===== */}
        <h2 className="section-title">Recent Quizzes</h2>

        <div className="quiz-list">
          {recentQuizzes.map((q, i) => (
            <div className="quiz-card" key={i}>
              <h3>{q.topic}</h3>
              <p>Score: {q.score}%</p>
            </div>
          ))}
        </div>

        {/* ===== PROGRESS ===== */}
        <h2 className="section-title">Learning Progress</h2>

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: "70%" }}></div>
        </div>

        {/* ===== QUICK ACTIONS ===== */}
        <h2 className="section-title">Quick Actions</h2>

       
      </div>
    </div>
  );
}

export default Dashboard;