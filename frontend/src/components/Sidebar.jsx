import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">QuizGenie AI</h2>

      <ul>
        <li>
          <Link to="/dashboard">🏠 Dashboard</Link>
        </li>

        <li>
          <Link to="/flashcards">📚 Flashcards</Link>
        </li>

        <li>
          <Link to="/quiz">🤖 AI Quiz</Link>
        </li>

        <li>
          <Link to="/history">📝 Quiz History</Link>
        </li>

        <li>
          <Link to="/analytics">📊 Analytics</Link>
        </li>

        <li>
          <Link to="/">🚪 Logout</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;