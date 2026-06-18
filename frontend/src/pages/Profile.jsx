import "./Profile.css";

function Profile() {
  const user = {
    name: "John Doe",
    email: "john@example.com",
    role: "Student",
    skills: "React, Node.js, MongoDB",
    experience: "Fresher",
    location: "India",
  };

  return (
    <div className="profile-container">

      <div className="profile-card">

        {/* HEADER */}
        <div className="profile-header">
          <div className="avatar">
            {user.name.charAt(0)}
          </div>

          <div>
            <h2>{user.name}</h2>
            <p>{user.role}</p>
          </div>
        </div>

        {/* INFO */}
        <div className="profile-info">
          <p><b>Email:</b> {user.email}</p>
          <p><b>Skills:</b> {user.skills}</p>
          <p><b>Experience:</b> {user.experience}</p>
          <p><b>Location:</b> {user.location}</p>
        </div>

        {/* STATS */}
        <div className="profile-stats">
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
        </div>

        {/* BUTTON */}
        <button className="edit-btn">
          Edit Profile
        </button>

      </div>
    </div>
  );
}

export default Profile;