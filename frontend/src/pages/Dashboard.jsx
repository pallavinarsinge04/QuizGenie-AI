import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>QuizGenie AI Dashboard</h1>

      <ul>
        <li>
          <Link to="/flashcards">Flashcards</Link>
        </li>

        <li>
          <Link to="/quiz">AI Quiz</Link>
        </li>

        <li>
          <Link to="/history">Quiz History</Link>
        </li>

        <li>
          <Link to="/analytics">Analytics</Link>
        </li>
      </ul>
    </div>
  );
}

export default Dashboard;