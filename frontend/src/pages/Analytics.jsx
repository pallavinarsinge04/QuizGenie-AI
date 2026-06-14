import { useEffect, useState } from "react";
import API from "../api/axios";

function Analytics() {
  const [data, setData] = useState({});

  useEffect(() => {
    loadAnalytics();
  }, []);

  const loadAnalytics = async () => {
    const res = await API.get("/analytics");
    setData(res.data);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>📊 Learning Analytics</h1>

      <div>
        <h2>Total Quizzes: {data.totalQuizzes}</h2>
        <h2>Total Flashcards: {data.totalFlashcards}</h2>
        <h2>Average Score: {data.averageScore}%</h2>
        <h2>Best Score: {data.bestScore}%</h2>
      </div>
    </div>
  );
}

export default Analytics;