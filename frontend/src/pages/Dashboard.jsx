import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>🎓 QuizGenie AI Dashboard</h1>
      <p>Welcome to your AI-powered learning platform.</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 250px)",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <Link to="/flashcards">
          <button style={{ width: "100%", height: "80px" }}>
            📚 Flashcards
          </button>
        </Link>

        <Link to="/quiz">
          <button style={{ width: "100%", height: "80px" }}>
            🤖 AI Quiz
          </button>
        </Link>

        <Link to="/history">
          <button style={{ width: "100%", height: "80px" }}>
            📝 Quiz History
          </button>
        </Link>

        <Link to="/analytics">
          <button style={{ width: "100%", height: "80px" }}>
            📊 Analytics
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;