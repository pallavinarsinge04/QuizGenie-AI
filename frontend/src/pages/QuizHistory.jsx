import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "./QuizHistory.css";

function QuizHistory() {
const [search, setSearch] = useState("");

const quizzes = [
{
_id: 1,
topic: "React",
score: 9,
totalQuestions: 10,
createdAt: "2026-06-20",
},
{
_id: 2,
topic: "Java",
score: 8,
totalQuestions: 10,
createdAt: "2026-06-18",
},
{
_id: 3,
topic: "Python",
score: 10,
totalQuestions: 10,
createdAt: "2026-06-15",
},
];

const filteredQuizzes = quizzes.filter((quiz) =>
quiz.topic.toLowerCase().includes(search.toLowerCase())
);

const totalQuizzes = quizzes.length;

const percentages = quizzes.map(
(quiz) => (quiz.score / quiz.totalQuestions) * 100
);

const bestScore =
percentages.length > 0
? Math.max(...percentages)
: 0;

const avgScore =
percentages.length > 0
? (
percentages.reduce((a, b) => a + b, 0) /
percentages.length
).toFixed(1)
: 0;

const totalQuestionsSolved = quizzes.reduce(
(sum, quiz) => sum + quiz.totalQuestions,
0
);

const passedCount = quizzes.filter(
(quiz) =>
(quiz.score / quiz.totalQuestions) * 100 >= 40
).length;

const latestTopic =
quizzes.length > 0 ? quizzes[0].topic : "N/A";

return ( <div className="layout"> <Sidebar />

```
  <div className="main-content">
    <Navbar />

    <div className="history-container">
      <h1>📜 Quiz History</h1>

      {/* Stats */}
      <div className="history-stats">

        <div className="stat-card">
          <h2>{totalQuizzes}</h2>
          <p>Total Quizzes</p>
        </div>

        <div className="stat-card">
          <h2>{bestScore}%</h2>
          <p>Best Score</p>
        </div>

        <div className="stat-card">
          <h2>{avgScore}%</h2>
          <p>Average Score</p>
        </div>

        <div className="stat-card">
          <h2>{passedCount}</h2>
          <p>Passed Quizzes</p>
        </div>

        <div className="stat-card">
          <h2>{totalQuestionsSolved}</h2>
          <p>Questions Solved</p>
        </div>

        <div className="stat-card">
          <h2>{latestTopic}</h2>
          <p>Latest Topic</p>
        </div>

      </div>

      {/* Search */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search by Topic..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />
      </div>

      {/* Table */}
      <div className="history-table">
        <table>
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
            {filteredQuizzes.map((quiz) => {
              const percentage = Math.round(
                (quiz.score /
                  quiz.totalQuestions) *
                  100
              );

              return (
                <tr key={quiz._id}>
                  <td>{quiz.topic}</td>
                  <td>{quiz.score}</td>
                  <td>{quiz.totalQuestions}</td>
                  <td>{percentage}%</td>
                  <td>
                    {new Date(
                      quiz.createdAt
                    ).toLocaleDateString()}
                  </td>

                  <td>
                    <span
                      className={
                        percentage >= 40
                          ? "pass"
                          : "fail"
                      }
                    >
                      {percentage >= 40
                        ? "Pass"
                        : "Fail"}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Performance */}
      <div className="performance-card">
        <h2>📈 Performance Summary</h2>

        <div className="progress-item">
          <p>Average Performance</p>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${avgScore}%`,
              }}
            ></div>
          </div>
        </div>

        <div className="progress-item">
          <p>Best Performance</p>
          <div className="progress-bar">
            <div
              className="progress-fill best"
              style={{
                width: `${bestScore}%`,
              }}
            ></div>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>


);
}

export default QuizHistory;
