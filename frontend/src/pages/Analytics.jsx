import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import API from "../api/axios";
import "./Analytics.css";

function Analytics() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [analytics, setAnalytics] = useState({
    totalQuizzes: 0,
    bestScore: 0,
    avgScore: 0,
    quizzes: [],
  });

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const res = await API.get(
        `/quiz/analytics/${user?._id}`
      );

      setAnalytics(res.data);
    } catch (error) {
      console.log(
        error.response?.data || error.message
      );
    }
  };

  const weeklyCompletion = Math.min(
    analytics.totalQuizzes * 10,
    100
  );

  const accuracy = analytics.avgScore || 0;

  const studyStreak = Math.min(
    analytics.totalQuizzes * 5,
    100
  );

  return (
    <div className="analytics-layout">
      <Sidebar />

      <div className="analytics-main">
        <Navbar />

        <div className="analytics-container">
          <h1>📊 Analytics Dashboard</h1>

          {/* STATS */}
          <div className="stats-grid">
            <div className="stat-card">
              <h2>{analytics.totalQuizzes}</h2>
              <p>Total Quizzes</p>
            </div>

            <div className="stat-card">
              <h2>{analytics.avgScore}%</h2>
              <p>Average Score</p>
            </div>

            <div className="stat-card">
              <h2>{analytics.bestScore}%</h2>
              <p>Best Score</p>
            </div>

            <div className="stat-card">
              <h2>{analytics.quizzes.length}</h2>
              <p>Completed Tests</p>
            </div>
          </div>

          {/* PROGRESS */}
          <div className="progress-section">
            <h2>📈 Learning Progress</h2>

            <div className="progress-item">
              <div className="progress-label">
                <span>Weekly Completion</span>
                <span>{weeklyCompletion}%</span>
              </div>

              <div className="progress-bar">
                <div
                  style={{
                    width: `${weeklyCompletion}%`,
                  }}
                ></div>
              </div>
            </div>

            <div className="progress-item">
              <div className="progress-label">
                <span>Accuracy</span>
                <span>{accuracy}%</span>
              </div>

              <div className="progress-bar">
                <div
                  style={{
                    width: `${accuracy}%`,
                  }}
                ></div>
              </div>
            </div>

            <div className="progress-item">
              <div className="progress-label">
                <span>Study Progress</span>
                <span>{studyStreak}%</span>
              </div>

              <div className="progress-bar">
                <div
                  style={{
                    width: `${studyStreak}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* QUIZ HISTORY */}
          <div className="achievement-card">
            <h2>📚 Quiz History</h2>

            <table className="history-table">
              <thead>
                <tr>
                  <th>Topic</th>
                  <th>Score</th>
                  <th>Total</th>
                  <th>Percentage</th>
                  <th>Difficulty</th>
                  <th>Date</th>
                </tr>
              </thead>

              <tbody>
                {analytics.quizzes.length > 0 ? (
                  analytics.quizzes.map(
                    (quiz, index) => (
                      <tr key={index}>
                        <td>{quiz.topic}</td>
                        <td>{quiz.score}</td>
                        <td>
                          {quiz.totalQuestions}
                        </td>
                        <td>
                          {quiz.percentage}%
                        </td>
                        <td>
                          {quiz.difficulty}
                        </td>
                        <td>
                          {new Date(
                            quiz.createdAt
                          ).toLocaleDateString()}
                        </td>
                      </tr>
                    )
                  )
                ) : (
                  <tr>
                    <td colSpan="6">
                      No quiz history found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* ACHIEVEMENTS */}
          <div className="achievement-card">
            <h2>🏆 Achievements</h2>

            <div className="badges">
              {analytics.bestScore >= 90 && (
                <div className="badge">
                  🥇 Quiz Master
                </div>
              )}

              {analytics.totalQuizzes >= 5 && (
                <div className="badge">
                  🔥 Active Learner
                </div>
              )}

              {analytics.avgScore >= 80 && (
                <div className="badge">
                  🎯 High Accuracy
                </div>
              )}

              {analytics.totalQuizzes >= 10 && (
                <div className="badge">
                  📚 Quiz Champion
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;