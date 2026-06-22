import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "./Analytics.css";

function Analytics() {
  return (
    <div className="analytics-layout">
      <Sidebar />

      <div className="analytics-main">
        <Navbar />

        <div className="analytics-container">

          <h1>📊 Analytics Dashboard</h1>

          <div className="stats-grid">

            <div className="stat-card">
              <h2>25</h2>
              <p>Total Quizzes</p>
            </div>

            <div className="stat-card">
              <h2>88%</h2>
              <p>Average Score</p>
            </div>

            <div className="stat-card">
              <h2>92%</h2>
              <p>Best Score</p>
            </div>

            <div className="stat-card">
              <h2>15 Days</h2>
              <p>Study Streak</p>
            </div>

          </div>

          <div className="progress-section">

  <h2>📈 Learning Progress</h2>

  {/* Weekly Completion */}
  <div className="progress-item">
    <div className="progress-label">
      <span>Weekly Completion</span>
      <span>75%</span>
    </div>
    <div className="progress-bar">
      <div style={{ width: "75%" }}></div>
    </div>
  </div>

  {/* Accuracy */}
  <div className="progress-item">
    <div className="progress-label">
      <span>Accuracy</span>
      <span>88%</span>
    </div>
    <div className="progress-bar">
      <div style={{ width: "88%" }}></div>
    </div>
  </div>

  {/* Study Streak */}
  <div className="progress-item">
    <div className="progress-label">
      <span>Study Streak</span>
      <span>60%</span>
    </div>
    <div className="progress-bar">
      <div style={{ width: "60%" }}></div>
    </div>
  </div>

</div>

          <div className="achievement-card">

            <h2>🏆 Achievements</h2>

            <div className="badges">

              <div className="badge">
                🥇 Quiz Master
              </div>

              <div className="badge">
                🔥 15 Day Streak
              </div>

              <div className="badge">
                🎯 90% Accuracy
              </div>

              <div className="badge">
                📚 100 Flashcards
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Analytics;