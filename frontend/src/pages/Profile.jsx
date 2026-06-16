import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile-layout">
      <Sidebar />

      <div className="profile-main">
        <Navbar />

        <div className="profile-container">

          <div className="profile-card">

            <img
              src="https://i.pravatar.cc/200"
              alt="profile"
              className="profile-image"
            />

            <h2>Pallavi Narsinge</h2>

            <p>Full Stack Developer</p>

            <button>Edit Profile</button>

          </div>

          <div className="info-card">

            <h2>Personal Information</h2>

            <div className="info-row">
              <span>Name</span>
              <span>Pallavi Narsinge</span>
            </div>

            <div className="info-row">
              <span>Email</span>
              <span>pallavi@gmail.com</span>
            </div>

            <div className="info-row">
              <span>College</span>
              <span>XYZ Engineering College</span>
            </div>

            <div className="info-row">
              <span>Branch</span>
              <span>Computer Science</span>
            </div>

            <div className="info-row">
              <span>Skills</span>
              <span>React, Node, MongoDB</span>
            </div>

          </div>

          <div className="stats-grid">

            <div className="stat-card">
              <h2>25</h2>
              <p>Quizzes Completed</p>
            </div>

            <div className="stat-card">
              <h2>150</h2>
              <p>Flashcards</p>
            </div>

            <div className="stat-card">
              <h2>15</h2>
              <p>Study Streak</p>
            </div>

            <div className="stat-card">
              <h2>88%</h2>
              <p>Average Score</p>
            </div>

          </div>

          <div className="progress-card">

            <h2>Learning Progress</h2>

            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>

            <p>80% Completed</p>

          </div>

          <div className="resume-card">

            <h2>Resume</h2>

            <input type="file" />

            <button className="upload-btn">
              Upload Resume
            </button>

          </div>

          <div className="action-buttons">

            <button className="logout-btn">
              Logout
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Profile;