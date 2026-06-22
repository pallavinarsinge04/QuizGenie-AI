import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./Register.css";

function Register() {
const navigate = useNavigate();

const [formData, setFormData] = useState({
name: "",
email: "",
password: "",
confirmPassword: "",
role: "student",
skills: "",
experience: "",
location: "",
phone: "",
});

const [loading, setLoading] = useState(false);

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};

const handleRegister = async () => {
if (
!formData.name ||
!formData.email ||
!formData.password
) {
alert("Please fill all required fields");
return;
}

```
if (formData.password !== formData.confirmPassword) {
  alert("Passwords do not match");
  return;
}

try {
  setLoading(true);

  const res = await axios.post(
    "http://localhost:5000/api/auth/register",
    {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      role: formData.role,
      skills: formData.skills,
      experience: formData.experience,
      location: formData.location,
      phone: formData.phone,
    }
  );

  console.log(res.data);

  alert("Registration Successful!");

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
```

};

return ( <div className="auth-container">

```
  <div className="auth-card register-card">

    <div className="auth-header">
      <h2>Create Account 🚀</h2>
      <p>
        Join QuizGenie AI and start your learning journey
      </p>
    </div>

    <input
      type="text"
      name="name"
      placeholder="Full Name"
      value={formData.name}
      onChange={handleChange}
    />

    <input
      type="email"
      name="email"
      placeholder="Email Address"
      value={formData.email}
      onChange={handleChange}
    />

    <input
      type="password"
      name="password"
      placeholder="Password"
      value={formData.password}
      onChange={handleChange}
    />

    <input
      type="password"
      name="confirmPassword"
      placeholder="Confirm Password"
      value={formData.confirmPassword}
      onChange={handleChange}
    />

    <select
      name="role"
      value={formData.role}
      onChange={handleChange}
    >
      <option value="student">Student</option>
      <option value="teacher">Teacher</option>
      <option value="developer">Developer</option>
    </select>

    <input
      type="text"
      name="skills"
      placeholder="Skills (React, Java, Python)"
      value={formData.skills}
      onChange={handleChange}
    />

    <select
      name="experience"
      value={formData.experience}
      onChange={handleChange}
    >
      <option value="">Experience Level</option>
      <option value="Beginner">Beginner</option>
      <option value="Intermediate">Intermediate</option>
      <option value="Advanced">Advanced</option>
    </select>

    <input
      type="text"
      name="location"
      placeholder="Location"
      value={formData.location}
      onChange={handleChange}
    />

    <input
      type="tel"
      name="phone"
      placeholder="Mobile Number"
      value={formData.phone}
      onChange={handleChange}
    />

    <button
      onClick={handleRegister}
      disabled={loading}
    >
      {loading
        ? "Creating Account..."
        : "Register"}
    </button>

    <div className="register-features">
      <div>📚 AI Generated Quizzes</div>
      <div>🏆 Certificates & Achievements</div>
      <div>📊 Learning Analytics</div>
      <div>🤖 AI Study Assistant</div>
    </div>

    <div className="auth-link">
      Already have an account?
      <Link to="/"> Login</Link>
    </div>

  </div>
</div>

);
}

export default Register;
