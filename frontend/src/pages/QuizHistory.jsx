import { useEffect, useState } from "react";
import API from "../api/axios";

export default function QuizHistory() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    const res = await API.get("/quiz");
    setHistory(res.data);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Quiz History</h1>

      {history.map((quiz) => (
        <div key={quiz._id}>
          <h3>{quiz.topic}</h3>

          <p>Score: {quiz.score}</p>

          <p>{quiz.percentage}%</p>
        </div>
      ))}
    </div>
  );
}