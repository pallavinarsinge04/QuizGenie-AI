import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px",
        background: "#2563eb",
        color: "#fff",
      }}
    >
      <h2>QuizGenie AI</h2>

      <div>
        <Link to="/dashboard">Dashboard</Link>{" | "}
        <Link to="/profile">Profile</Link>{" | "}
        <Link to="/">Logout</Link>
      </div>
    </nav>
  );
}