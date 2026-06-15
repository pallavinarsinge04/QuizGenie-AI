import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "220px",
        minHeight: "100vh",
        background: "#1e293b",
        padding: "20px",
      }}
    >
      <Link to="/dashboard">Dashboard</Link>
      <br /><br />

      <Link to="/quiz">AI Quiz</Link>
      <br /><br />

      <Link to="/flashcards">Flashcards</Link>
      <br /><br />

      <Link to="/history">History</Link>
      <br /><br />

      <Link to="/analytics">Analytics</Link>
      <br /><br />

      <Link to="/certificate">Certificate</Link>
      <br /><br />

      <Link to="/community">Community</Link>
      <br /><br />

      <Link to="/chat">Chat</Link>
      <br /><br />

      <Link to="/videos">Videos</Link>
      <br /><br />

      <Link to="/leaderboard">Leaderboard</Link>
    </div>
  );
}

export default Sidebar;