import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
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

  console.log("Registration Success:", res.data);

  alert("Registration Successful!");

  // Redirect to Login Page
  navigate("/");

} catch (err) {
  console.log(err.response?.data || err.message);

  alert(
    err.response?.data?.message ||
    "Registration Failed"
  );
} finally {
  setLoading(false);
}


};

return ( <div className="auth-container"> <div className="auth-card register-card">


    <div className="auth-header">
      <h2>Create Account 🚀</h2>
      <p>Join QuizGenie AI and start learning smarter</p>
    </div>

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

    <select
      value={role}
      onChange={(e) => setRole(e.target.value)}
    >
      <option value="student">Student</option>
      <option value="teacher">Teacher</option>
      <option value="developer">Developer</option>
    </select>

    <input
      type="text"
      placeholder="Skills (React, Java, Python)"
      value={skills}
      onChange={(e) => setSkills(e.target.value)}
    />

    <input
      type="text"
      placeholder="Experience Level"
      value={experience}
      onChange={(e) => setExperience(e.target.value)}
    />

    <input
      type="text"
      placeholder="Location"
      value={location}
      onChange={(e) => setLocation(e.target.value)}
    />

    <button
      onClick={handleRegister}
      disabled={loading}
    >
      {loading
        ? "Creating Account..."
        : "Register"}
    </button>

    <div className="auth-link">
      Already have an account?{" "}
      <Link to="/">Login</Link>
    </div>

  </div>
</div>


);
}

export default Register;
