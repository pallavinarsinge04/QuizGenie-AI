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

          <div className="chart-section">

            <div className="chart-card">
              <h2>Weekly Progress</h2>

              <div className="bars">

                <div className="bar">
                  <span style={{ height: "45%" }}></span>
                  <p>Mon</p>
                </div>

                <div className="bar">
                  <span style={{ height: "70%" }}></span>
                  <p>Tue</p>
                </div>

                <div className="bar">
                  <span style={{ height: "80%" }}></span>
                  <p>Wed</p>
                </div>

                <div className="bar">
                  <span style={{ height: "55%" }}></span>
                  <p>Thu</p>
                </div>

                <div className="bar">
                  <span style={{ height: "90%" }}></span>
                  <p>Fri</p>
                </div>

                <div className="bar">
                  <span style={{ height: "75%" }}></span>
                  <p>Sat</p>
                </div>

                <div className="bar">
                  <span style={{ height: "95%" }}></span>
                  <p>Sun</p>
                </div>

              </div>
            </div>

            <div className="chart-card">

              <h2>Subject Performance</h2>

              <table>

                <thead>
                  <tr>
                    <th>Subject</th>
                    <th>Score</th>
                  </tr>
                </thead>

                <tbody>

                  <tr>
                    <td>React</td>
                    <td>92%</td>
                  </tr>

                  <tr>
                    <td>Java</td>
                    <td>84%</td>
                  </tr>

                  <tr>
                    <td>Python</td>
                    <td>89%</td>
                  </tr>

                  <tr>
                    <td>DSA</td>
                    <td>78%</td>
                  </tr>

                  <tr>
                    <td>SQL</td>
                    <td>81%</td>
                  </tr>

                </tbody>

              </table>

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