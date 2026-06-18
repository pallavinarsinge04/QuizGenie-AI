import { useState } from "react";
import axios from "axios";

function Profile() {
  // ✅ SAFE USER HANDLING
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;

  // 🚨 If not logged in
  if (!user) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Please login to access Profile</h2>
      </div>
    );
  }

  const [name, setName] = useState(user.name || "");
  const [skills, setSkills] = useState(user.skills || "");
  const [profilePic, setProfilePic] = useState("");
  const [resume, setResume] = useState(null);

  // ================= UPDATE PROFILE =================
  const updateProfile = async () => {
    try {
      const res = await axios.put(
        "http://localhost:5000/api/user/update",
        {
          userId: user._id,
          name,
          skills,
          profilePic,
        }
      );

      alert("Profile Updated!");

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );
    } catch (err) {
      console.log(err);
      alert("Profile update failed");
    }
  };

  // ================= UPLOAD RESUME =================
  const uploadResume = async () => {
    if (!resume) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("resume", resume);
    formData.append("userId", user._id);

    try {
      await axios.post(
        "http://localhost:5000/api/user/upload-resume",
        formData
      );

      alert("Resume Uploaded!");
    } catch (err) {
      console.log(err);
      alert("Resume upload failed");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px" }}>
      <h1>Profile Page</h1>

      {/* NAME */}
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />

      {/* SKILLS */}
      <input
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
        placeholder="Skills (comma separated)"
      />

      {/* PROFILE PIC */}
      <input
        value={profilePic}
        onChange={(e) => setProfilePic(e.target.value)}
        placeholder="Profile Image URL"
      />

      <button onClick={updateProfile}>
        Update Profile
      </button>

      <hr />

      {/* RESUME */}
      <input
        type="file"
        onChange={(e) => setResume(e.target.files[0])}
      />

      <button onClick={uploadResume}>
        Upload Resume
      </button>
    </div>
  );
}

export default Profile;