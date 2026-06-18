import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [skills, setSkills] = useState("");
  const [experience, setExperience] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);

  // ================= REGISTER API =================
  const handleRegister = async () => {
    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name,
          email,
          password,
          role,
          skills,
          experience,
          location,
        }
      );

      alert("Registration Successful!");
      console.log(res.data);

      // ✅ FIX: proper React navigation
      navigate("/login");

    } catch (err) {
      console.log(err.response?.data || err.message);
      alert("Registration Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card register-card">

        {/* HEADER */}
        <div className="auth-header">
          <h2>Create Account 🚀</h2>
          <p>Join our Job Portal & start applying today</p>
        </div>

        {/* INPUTS */}
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* BUTTON */}
        <button onClick={handleRegister} disabled={loading}>
          {loading ? "Creating Account..." : "Register"}
        </button>

        {/* LINK */}
        <div className="auth-link">
          Already have an account?{" "}
          <a href="/">Login</a>
        </div>

      </div>
    </div>
  );
}

export default Register;