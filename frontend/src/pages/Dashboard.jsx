import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "./Dashboard.css";
const user = JSON.parse(localStorage.getItem("user"));

console.log("Dashboard User:", user);
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
    if (!topic) {
      alert("Please enter a topic");
      return;
    }

    alert(`Generating ${difficulty} quiz for ${topic}`);
  };

  return (
    <div className="layout">
      <Sidebar />

      <div className="main-content">
        <Navbar />

        {/* Welcome Section */}
        <div className="dashboard-header">
          <div>
            <div className="welcome-section">
  <h1>
    🤖 QuizGenie AI
  </h1>

  <h2>
    Welcome Back, {user?.name} 👋
  </h2>

  <p>
    Ready to continue your learning journey today?
  </p>
</div>
            <p>
              Ready to continue your learning journey today?
            </p>
          </div>
        </div>

        {/* Statistics */}
        <h2 className="section-title">📊 Your Quiz Stats</h2>

        <div className="stats-grid">
          <div className="stat-card">
            <h2>{stats.total}</h2>
            <p>Total Quizzes</p>
          </div>

          <div className="stat-card">
            <h2>{stats.attempted}</h2>
            <p>Attempted</p>
          </div>

          <div className="stat-card">
            <h2>{stats.avgScore}%</h2>
            <p>Average Score</p>
          </div>

          <div className="stat-card">
            <h2>{stats.bestScore}%</h2>
            <p>Best Score</p>
          </div>
        </div>

        {/* AI Quiz Generator */}
        <h2 className="section-title">🤖 AI Quiz Generator</h2>

        <div className="quiz-generator-card">
          <input
            type="text"
            placeholder="Enter Quiz Topic..."
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
            Generate Quiz
          </button>
        </div>

        {/* Progress */}
        <h2 className="section-title">📈 Learning Progress</h2>

        <div className="progress-container">
          <div className="progress-label">
            <span>Overall Progress</span>
            <span>70%</span>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: "70%" }}
            ></div>
          </div>
        </div>

        {/* Recent Quizzes */}
        <h2 className="section-title">📝 Recent Quizzes</h2>

        <div className="quiz-list">
          {recentQuizzes.map((quiz, index) => (
            <div className="quiz-card" key={index}>
              <h3>{quiz.topic}</h3>
              <p>Score: {quiz.score}%</p>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <h2 className="section-title">🏆 Achievements</h2>

        <div className="achievement-grid">
          <div className="achievement-card">
            🔥 7 Day Streak
          </div>

          <div className="achievement-card">
            🎯 90% Accuracy
          </div>

          <div className="achievement-card">
            📚 50 Flashcards Completed
          </div>

          <div className="achievement-card">
            🥇 Top Learner
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;