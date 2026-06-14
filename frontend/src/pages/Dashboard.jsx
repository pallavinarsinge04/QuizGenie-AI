import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/dashboard.css";

function Dashboard() {
  return (
    <div className="container">
      <Sidebar />

      <div className="main">
        <Navbar />

        <div className="cards">

          <div className="card">
            <h2>120</h2>
            <p>Flashcards</p>
          </div>

          <div className="card">
            <h2>32</h2>
            <p>Quizzes</p>
          </div>

          <div className="card">
            <h2>87%</h2>
            <p>Average Score</p>
          </div>

          <div className="card">
            <h2>15</h2>
            <p>Day Streak</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;