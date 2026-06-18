import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "./Dashboard.css";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  const jobs = [
    { title: "Frontend Developer", company: "Google" },
    { title: "Backend Developer", company: "Microsoft" },
    { title: "Full Stack Developer", company: "Amazon" },
  ];

  const appliedJobs = [
    { title: "React Developer", status: "Applied" },
    { title: "Node Developer", status: "Interview" },
  ];

  const companies = ["Google", "Microsoft", "Amazon", "Meta"];

  return (
    <div className="layout">
      <Sidebar />

      <div className="main-content">
        <Navbar />

        {/* ===== HERO SECTION ===== */}
        <div className="dashboard-hero">
          <h1>Welcome, {user?.name || "User"} 👋</h1>
          <p>Find your dream job and grow your career</p>
        </div>

        {/* ===== STATS SECTION ===== */}
        <div className="stats-grid">
          <div className="stat-card">Total Jobs: 120</div>
          <div className="stat-card">Applied Jobs: 5</div>
          <div className="stat-card">Saved Jobs: 8</div>
          <div className="stat-card">Profile: 80%</div>
        </div>

        {/* ===== RECOMMENDED JOBS ===== */}
        <h2 className="section-title">Recommended Jobs</h2>

        <div className="job-grid">
          {jobs.map((job, i) => (
            <div className="job-card" key={i}>
              <h3>{job.title}</h3>
              <p>{job.company}</p>
              <button>Apply</button>
            </div>
          ))}
        </div>

        {/* ===== ACTIVITY SECTION ===== */}
        <h2 className="section-title">My Applications</h2>

        <div className="activity-section">
          {appliedJobs.map((job, i) => (
            <div className="activity-card" key={i}>
              <h4>{job.title}</h4>
              <span>{job.status}</span>
            </div>
          ))}
        </div>

        {/* ===== TOP COMPANIES ===== */}
        <h2 className="section-title">Top Companies</h2>

        <div className="company-grid">
          {companies.map((c, i) => (
            <div className="company-card" key={i}>
              <h3>{c}</h3>
            </div>
          ))}
        </div>

        {/* ===== PROGRESS TRACKER ===== */}
        <h2 className="section-title">Profile Progress</h2>

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: "80%" }}></div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;