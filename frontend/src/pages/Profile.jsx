import Sidebar from "../components/Sidebar";
import "./Profile.css";
import { useState } from "react";

function Profile() {
  const [image, setImage] = useState(null);

  const user = {
    name: "John Doe",
    email: "john@example.com",
    role: "Student",
    skills: ["React", "Node.js", "MongoDB", "JavaScript"],
    location: "India",
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  return (
    <div className="profile-layout">

      <Sidebar />

      <div className="profile-content">

        {/* HEADER */}
        <div className="profile-header">

          <div className="avatar-box">
            <img
              src={
                image ||
                "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              }
              alt="profile"
            />

            <label className="edit-icon">
              ✏️
              <input type="file" hidden onChange={handleImageChange} />
            </label>
          </div>

          <div>
            <h1>{user.name}</h1>
            <p>{user.role}</p>
          </div>

        </div>

        {/* PERSONAL INFO */}
        <section className="section">
          <h2>Personal Info</h2>
          <p>Email: {user.email}</p>
          <p>Location: {user.location}</p>
        </section>

        {/* SKILLS */}
        <section className="section">
          <h2>Skills</h2>
          <div className="skills">
            {user.skills.map((skill, i) => (
              <span key={i} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* STATS */}
        <section className="section stats">
          <div>
            <h3>12</h3>
            <p>Quizzes</p>
          </div>

          <div>
            <h3>8</h3>
            <p>Certificates</p>
          </div>

          <div>
            <h3>85%</h3>
            <p>Avg Score</p>
          </div>
        </section>

        {/* ACTIVITY */}
        <section className="section">
          <h2>Recent Activity</h2>
          <ul className="activity">
            <li>✔ Completed React Quiz</li>
            <li>✔ Earned Certificate in JS</li>
            <li>✔ Joined AI Quiz Challenge</li>
          </ul>
        </section>

        {/* ACHIEVEMENTS */}
        <section className="section">
          <h2>Achievements</h2>
          <div className="badges">
            <span>🏆 Top Scorer</span>
            <span>🚀 Fast Learner</span>
            <span>🔥 7 Day Streak</span>
          </div>
        </section>

        {/* ACTION */}
        <button className="edit-btn">
          Edit Profile
        </button>

      </div>
    </div>
  );
}

export default Profile;