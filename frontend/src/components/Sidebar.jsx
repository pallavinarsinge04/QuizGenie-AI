import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">

      <h2>QuizGenie</h2>

      <Link to="/dashboard">🏠 Dashboard</Link>

      <Link to="/quiz">🤖 AI Quiz</Link>

      <Link to="/flashcards">📚 Flashcards</Link>

      <Link to="/history">📝 Quiz History</Link>

      <Link to="/analytics">📊 Analytics</Link>

      <Link to="/community">👥 Community</Link>

      <Link to="/leaderboard">🥇 Leaderboard</Link>

      <Link to="/profile">👤 Profile</Link>

    </div>
  );
}

export default Sidebar;