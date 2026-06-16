import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Navbar />

        <div style={{ padding: "20px" }}>
          <h1>📊 Dashboard</h1>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                padding: "20px",
                background: "#2563eb",
                color: "white",
                borderRadius: "10px",
              }}
            >
              <h2>12</h2>
              <p>Quizzes Completed</p>
            </div>

            <div
              style={{
                padding: "20px",
                background: "#10b981",
                color: "white",
                borderRadius: "10px",
              }}
            >
              <h2>35</h2>
              <p>Flashcards</p>
            </div>

            <div
              style={{
                padding: "20px",
                background: "#f59e0b",
                color: "white",
                borderRadius: "10px",
              }}
            >
              <h2>85%</h2>
              <p>Average Score</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;