import Sidebar from "../components/Sidebar";
import "./Profile.css";
import { useState } from "react";

function Profile() {
  const storedUser =
    JSON.parse(localStorage.getItem("user")) || {};

  const [editing, setEditing] = useState(false);

  const [user, setUser] = useState({
    name: storedUser.name || "",
    email: storedUser.email || "",
    role: storedUser.role || "Student",
    location: storedUser.location || "India",
    skills: storedUser.skills || [],
  });

  const [skillsInput, setSkillsInput] = useState(
    user.skills.join(", ")
  );

  const [image, setImage] = useState(
    localStorage.getItem("profileImage") || null
  );

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);

      setImage(imageUrl);

      localStorage.setItem(
        "profileImage",
        imageUrl
      );
    }
  };

  const handleSave = () => {
    const updatedUser = {
      ...user,
      skills: skillsInput
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
    };

    setUser(updatedUser);

    localStorage.setItem(
      "user",
      JSON.stringify(updatedUser)
    );

    alert("✅ Profile Updated Successfully");

    setEditing(false);
  };

  return (
    <div className="profile-layout">
      <Sidebar />

      <div className="profile-content">
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
              <input
                type="file"
                hidden
                onChange={handleImageChange}
              />
            </label>
          </div>

          <div>
            {editing ? (
              <input
                value={user.name}
                onChange={(e) =>
                  setUser({
                    ...user,
                    name: e.target.value,
                  })
                }
              />
            ) : (
              <h1>{user.name}</h1>
            )}

            <p>{user.role}</p>
          </div>
        </div>

        {/* PERSONAL INFO */}
        <section className="section">
          <h2>Personal Info</h2>

          {editing ? (
            <>
              <input
                value={user.email}
                onChange={(e) =>
                  setUser({
                    ...user,
                    email: e.target.value,
                  })
                }
              />

              <input
                value={user.location}
                onChange={(e) =>
                  setUser({
                    ...user,
                    location: e.target.value,
                  })
                }
              />
            </>
          ) : (
            <>
              <p>Email: {user.email}</p>
              <p>Location: {user.location}</p>
            </>
          )}
        </section>

        {/* SKILLS */}
        <section className="section">
          <h2>Skills</h2>

          {editing ? (
            <input
              value={skillsInput}
              onChange={(e) =>
                setSkillsInput(e.target.value)
              }
              placeholder="React, Java, Python"
            />
          ) : (
            <div className="skills">
              {user.skills.map((skill, i) => (
                <span
                  key={i}
                  className="skill-tag"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
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

        {!editing ? (
          <button
            className="edit-btn"
            onClick={() => setEditing(true)}
          >
            Edit Profile
          </button>
        ) : (
          <button
            className="edit-btn"
            onClick={handleSave}
          >
            Save Changes
          </button>
        )}
      </div>
    </div>
  );
}

export default Profile;