import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";

export default function Dashboard() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Navbar />

        <div
          style={{
            display: "flex",
            gap: "20px",
            padding: "20px",
          }}
        >
          <StatCard
            title="Total Quizzes"
            value="25"
          />

          <StatCard
            title="Flashcards"
            value="120"
          />

          <StatCard
            title="Accuracy"
            value="89%"
          />

          <StatCard
            title="Certificates"
            value="3"
          />
        </div>
      </div>
    </div>
  );
}