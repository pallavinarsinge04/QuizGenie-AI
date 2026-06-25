import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "./CommunityGroup.css";

function CommunityGroup() {
  const { id } = useParams();

  const groupData = {
    1: {
      name: "React Developers",
      description:
        "Learn React, Hooks, Redux, React Router, Context API, and build modern web applications.",
      topics: [
        "React Fundamentals",
        "React Router",
        "Redux Toolkit",
        "Hooks",
        "Projects & Interview Questions",
      ],
    },
    2: {
      name: "Python Learners",
      description:
        "Master Python programming, Django, Flask, Data Science, AI, and Automation.",
      topics: [
        "Python Basics",
        "OOP",
        "Django",
        "Flask",
        "Machine Learning",
      ],
    },
    3: {
      name: "Java Programming",
      description:
        "Learn Core Java, Advanced Java, Spring Boot, DSA, and Interview Preparation.",
      topics: [
        "Core Java",
        "Collections",
        "JDBC",
        "Spring Boot",
        "DSA",
      ],
    },
    4: {
      name: "Web Development",
      description:
        "Full Stack Development using HTML, CSS, JavaScript, React, Node.js and MongoDB.",
      topics: [
        "HTML & CSS",
        "JavaScript",
        "React",
        "Node.js",
        "MongoDB",
      ],
    },
    5: {
      name: "AI & Machine Learning",
      description:
        "Explore AI, ChatGPT, Deep Learning, Neural Networks and Machine Learning.",
      topics: [
        "Machine Learning",
        "Deep Learning",
        "Neural Networks",
        "ChatGPT APIs",
        "AI Projects",
      ],
    },
    6: {
      name: "Data Structures & Algorithms",
      description:
        "Practice coding problems and prepare for technical interviews.",
      topics: [
        "Arrays",
        "Linked Lists",
        "Trees",
        "Graphs",
        "Dynamic Programming",
      ],
    },
  };

  const group = groupData[id];

  if (!group) {
    return <h2>Community Not Found</h2>;
  }

  return (
    <div className="layout">
      <Sidebar />

      <div className="main-content">
        <Navbar />

        <div className="group-container">
          <h1>🚀 {group.name}</h1>

          <p className="group-description">
            {group.description}
          </p>

          <div className="group-card">
            <h2>📚 Topics Covered</h2>

            <ul>
              {group.topics.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
          </div>

          <div className="group-card">
            <h2>💬 Community Discussion</h2>

            <div className="post">
              <strong>Admin:</strong>
              <p>
                Welcome to {group.name}! Introduce yourself and
                share your learning goals.
              </p>
            </div>

            <div className="post">
              <strong>Member:</strong>
              <p>
                I'm learning this technology and looking for
                project ideas.
              </p>
            </div>
          </div>

          <div className="group-card">
            <h2>🏆 Benefits</h2>

            <ul>
              <li>Daily Discussions</li>
              <li>Interview Questions</li>
              <li>Project Sharing</li>
              <li>Study Resources</li>
              <li>Community Support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityGroup;