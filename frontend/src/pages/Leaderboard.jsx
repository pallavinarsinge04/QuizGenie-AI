import { useEffect, useState } from "react";
import API from "../api/axios";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "./Leaderboard.css";

function Leaderboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const fetchLeaderboard = async () => {
    try {
      const res = await API.get("/quiz/leaderboard");

      setUsers(res.data);
    } catch (error) {
      console.log(
        error.response?.data || error.message
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="layout">
      <Sidebar />

      <div className="main-content">
        <Navbar />

        <div className="leaderboard-container">
          <h1>🏆 Leaderboard</h1>
          <p>Top Quiz Performers</p>

          {loading ? (
            <h3>Loading Leaderboard...</h3>
          ) : users.length === 0 ? (
            <h3>No Quiz Data Available</h3>
          ) : (
            <table className="leaderboard-table">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Name</th>
                  <th>Total Quizzes</th>
                  <th>Average Score</th>
                  <th>Total Score</th>
                </tr>
              </thead>

              <tbody>
                {users.map((user, index) => (
                  <tr key={user._id}>
                    <td>
                      {index === 0
                        ? "🥇"
                        : index === 1
                        ? "🥈"
                        : index === 2
                        ? "🥉"
                        : index + 1}
                    </td>

                    <td>
                      {user.user?.name || "Unknown"}
                    </td>

                    <td>
                      {user.quizzesTaken}
                    </td>

                    <td>
                      {Number(
                        user.avgScore
                      ).toFixed(1)}
                      %
                    </td>

                    <td>
                      {Number(
                        user.totalScore
                      ).toFixed(1)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;