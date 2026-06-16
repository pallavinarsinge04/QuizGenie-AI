import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "250px",
        background: "#1e293b",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h2 style={{ color: "white" }}>QuizGenie AI</h2>

      <br />

      <Link to="/dashboard">🏠 Dashboard</Link>
      <br /><br />

      <Link to="/quiz">🤖 AI Quiz</Link>
      <br /><br />

      <Link to="/flashcards">📚 Flashcards</Link>
      <br /><br />

      <Link to="/history">📝 Quiz History</Link>
      <br /><br />

      <Link to="/analytics">📈 Analytics</Link>
      <br /><br />

      <Link to="/profile">👤 Profile</Link>
    </div>
  );
}

export default Sidebar;