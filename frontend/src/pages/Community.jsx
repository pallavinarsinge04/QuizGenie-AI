import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "./Community.css";

function Community() {
  const navigate = useNavigate();

  const [joinedGroups, setJoinedGroups] = useState([]);

  useEffect(() => {
    const savedGroups =
      JSON.parse(localStorage.getItem("joinedGroups")) || [];

    setJoinedGroups(savedGroups);
  }, []);

  const communities = [
    {
      id: 1,
      name: "React Developers",
      members: 1250,
      description: "Discuss React, Hooks, Redux and projects.",
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
      description: "Java, Spring Boot, DSA and Interview Prep.",
    },
    {
      id: 4,
      name: "Web Development",
      members: 1500,
      description: "HTML, CSS, JavaScript, React and Node.js.",
    },
    {
      id: 5,
      name: "AI & Machine Learning",
      members: 720,
      description: "Explore AI, ML, Deep Learning and ChatGPT.",
    },
    {
      id: 6,
      name: "Data Structures & Algorithms",
      members: 1100,
      description: "Prepare for coding interviews and contests.",
    },
  ];

  const handleJoin = (groupId) => {
    if (!joinedGroups.includes(groupId)) {
      const updatedGroups = [...joinedGroups, groupId];

      setJoinedGroups(updatedGroups);

      localStorage.setItem(
        "joinedGroups",
        JSON.stringify(updatedGroups)
      );

      alert("🎉 Successfully joined the community!");
    }
  };

  const openGroup = (groupId) => {
    navigate(`/community/${groupId}`);
  };

  return (
    <div className="layout">
      <Sidebar />

      <div className="main-content">
        <Navbar />

        <div className="community-header">
          <h1>🌍 Community Hub</h1>
          <p>
            Join communities, learn with peers, discuss topics,
            and grow together.
          </p>
        </div>

        <div className="community-grid">
          {communities.map((group) => (
            <div className="community-card" key={group.id}>
              <h2>{group.name}</h2>

              <p className="group-description">
                {group.description}
              </p>

              <p className="group-members">
                👥 {group.members.toLocaleString()} Members
              </p>

              {!joinedGroups.includes(group.id) ? (
                <button
                  className="join-btn"
                  onClick={() => handleJoin(group.id)}
                >
                  Join Group
                </button>
              ) : (
                <button
                  className="open-btn"
                  onClick={() => openGroup(group.id)}
                >
                  Open Group 🚀
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Community;