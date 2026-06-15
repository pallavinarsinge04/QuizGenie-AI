import { useEffect, useState } from "react";
import API from "../api/axios";

function ManageQuizzes() {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    loadQuiz();
  }, []);

  const loadQuiz = async () => {
    const res = await API.get("/quiz");
    setQuizzes(res.data);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Manage Quizzes</h1>

      {quizzes.map((quiz) => (
        <div key={quiz._id}>
          <h3>{quiz.topic}</h3>

          <p>Score : {quiz.score}</p>

          <button>Edit</button>

          <button>Delete</button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default ManageQuizzes;