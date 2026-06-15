import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div
      style={{
        width: "250px",
        minHeight: "100vh",
        background: "#1e293b",
        color: "white",
        padding: "20px",
      }}
    >
      <h2>QuizGenie AI</h2>

      <hr />

      <p>
        <Link to="/dashboard" style={{ color: "white" }}>
          Dashboard
        </Link>
      </p>

      <p>
        <Link to="/flashcards" style={{ color: "white" }}>
          Flashcards
        </Link>
      </p>

      <p>
        <Link to="/quiz" style={{ color: "white" }}>
          AI Quiz
        </Link>
      </p>

      <p>
        <Link to="/history" style={{ color: "white" }}>
          Quiz History
        </Link>
      </p>

      <p>
        <Link to="/analytics" style={{ color: "white" }}>
          Analytics
        </Link>
      </p>

      <p>
        <Link to="/profile" style={{ color: "white" }}>
          Profile
        </Link>
      </p>
    </div>
  );
}