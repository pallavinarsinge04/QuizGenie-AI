import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Navbar />

        <div style={{ padding: 20 }}>
          <h1>Dashboard</h1>

          <h3>Welcome to QuizGenie AI</h3>

          <p>Manage quizzes, flashcards and analytics.</p>
        </div>
      </div>
    </div>
  );
}