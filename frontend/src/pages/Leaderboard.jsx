import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "./Leaderboard.css";

function Leaderboard() {
  const [search, setSearch] = useState("");

  const users = [
    { name: "Amit", score: 95, role: "Student" },
    { name: "Neha", score: 88, role: "Student" },
    { name: "Rahul", score: 78, role: "Student" },
    { name: "Priya", score: 92, role: "Student" },
    { name: "Vikas", score: 85, role: "Student" },
  ];

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="layout">
      <Sidebar />

      <div className="main-content">
        <Navbar />

        {/* ===== HEADER SECTION ===== */}
        <div className="leaderboard-header">
          <h1>🏆 Leaderboard</h1>
          
        </div>

        {/* ===== STATS SECTION ===== */}
        <div className="stats-section">
          <div className="stat-card">
            <h3>{users.length}</h3>
            <p>Total Users</p>
          </div>

          <div className="stat-card">
            <h3>
              {Math.max(...users.map((u) => u.score))}
            </h3>
            <p>Top Score</p>
          </div>

          <div className="stat-card">
            <h3>
              {(
                users.reduce((a, b) => a + b.score, 0) /
                users.length
              ).toFixed(1)}
            </h3>
            <p>Average Score</p>
          </div>
        </div>

        {/* ===== SEARCH SECTION ===== */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Search user..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* ===== TOP RANK CARDS ===== */}
        <div className="top-section">
          {users
            .sort((a, b) => b.score - a.score)
            .slice(0, 3)
            .map((user, index) => (
              <div className="top-card" key={index}>
                <h2>
                  {index === 0
                    ? "🥇"
                    : index === 1
                    ? "🥈"
                    : "🥉"}
                </h2>
                <h3>{user.name}</h3>
                <p>{user.score} Points</p>
              </div>
            ))}
        </div>

        {/* ===== TABLE SECTION ===== */}
        <div className="table-section">
          <table>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Role</th>
                <th>Score</th>
                <th>Badge</th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers
                .sort((a, b) => b.score - a.score)
                .map((user, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.role}</td>
                    <td>{user.score}</td>
                    <td>
                      {user.score >= 90
                        ? "🥇 Gold"
                        : user.score >= 80
                        ? "🥈 Silver"
                        : "🥉 Bronze"}
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

export default Leaderboard;