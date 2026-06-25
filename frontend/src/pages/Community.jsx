import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "./Community.css";

function Community() {
  const [joinedGroups, setJoinedGroups] = useState([]);

  const communities = [
    {
      id: 1,
      name: "React Developers",
      members: 1250,
      description: "Discuss React, Hooks, Redux, and projects.",
    },
    {
      id: 2,
      name: "Python Learners",
      members: 980,
      description: "Learn Python, Django, Flask and AI.",
    },
    {
      id: 3,
      name: "Java Programming",
      members: 850,
      description: "Java, Spring Boot, DSA, and Interview Prep.",
    },
    {
      id: 4,
      name: "Web Development",
      members: 1500,
      description: "HTML, CSS, JavaScript, React, Node.js.",
    },
  ];

  const handleJoin = (groupId) => {
    if (!joinedGroups.includes(groupId)) {
      setJoinedGroups([...joinedGroups, groupId]);
    }
  };

  return (
    <div className="layout">
      <Sidebar />

      <div className="main-content">
        <Navbar />

        <h1>🌍 Join Community</h1>
        <p>Connect with learners and developers.</p>

        <div className="community-grid">
          {communities.map((group) => (
            <div className="community-card" key={group.id}>
              <h2>{group.name}</h2>

              <p>{group.description}</p>

              <p>
                👥 {group.members} Members
              </p>

              <button
                className="join-btn"
                disabled={joinedGroups.includes(group.id)}
                onClick={() => handleJoin(group.id)}
              >
                {joinedGroups.includes(group.id)
                  ? "✅ Joined"
                  : "Join Group"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Community;