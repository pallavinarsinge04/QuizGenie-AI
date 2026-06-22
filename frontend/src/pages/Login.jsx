import { useState } from "react";
import axios from "axios";
import "./Login.css";
console.log("Login Response:", res.data);
console.log("User Name:", res.data.user.name);
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // ================= LOGIN API =================
  const handleLogin = async () => {
    try {
      setLoading(true);

      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      console.log(res.data);

      // store user + token
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("token", res.data.token);

      alert("Login Successful!");

      // redirect
      window.location.href = "/dashboard";

    } catch (err) {
      console.log(err.response?.data || err.message);
      alert(err.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">

      <div className="auth-card login-card">

        <div className="auth-header">
          <h2>Welcome Back 👋</h2>
          <p>Login to continue your journey</p>
        </div>

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

        <button onClick={handleLogin} disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        <div className="auth-link">
          Don't have an account? <a href="/register">Register</a>
        </div>

      </div>
    </div>
  );
}

export default Login;