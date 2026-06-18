import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api/axios";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    try {
      const res = await API.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);

      navigate("/dashboard");
    } catch (err) {
  console.log(err);
  console.log(err.response?.data);

  alert(
    err.response?.data?.message ||
    err.response?.data?.error ||
    "Login Failed"
  );
    }
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <h1>QuizGenie AI</h1>

        <p>Welcome Back 👋</p>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={loginUser}>
          Login
        </button>

        <div className="login-footer">
          Don't have an account?

          <Link to="/register">
            Register
          </Link>
        </div>

      </div>

    </div>
  );
}