import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: "50px" }}>
      <h1>QuizGenie AI</h1>

      <p>
        AI Powered Learning Platform
      </p>

      <Link to="/login">
        <button>Login</button>
      </Link>

      <br />
      <br />

      <Link to="/register">
        <button>Register</button>
      </Link>
    </div>
  );
}

export default Home;