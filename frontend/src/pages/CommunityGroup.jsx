import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "./CommunityGroup.css";

function CommunityGroup() {
  const { id } = useParams();

  const groups = {
    1: {
      title: "React Developers",
      description:
        "React is a JavaScript library used to build modern and interactive user interfaces.",

      learning: [
        "What is React?",
        "JSX",
        "Components",
        "Props & State",
        "Hooks",
        "React Router",
        "Redux Toolkit",
      ],

      projects: [
        "Todo App",
        "Weather App",
        "E-Commerce Website",
        "Quiz Platform",
        "Chat Application",
      ],

      interview: [
        "What is Virtual DOM?",
        "Difference between State and Props?",
        "What are Hooks?",
        "Explain useEffect Hook.",
      ],
    },

    2: {
      title: "Python Learners",
      description:
        "Python is one of the most popular programming languages for AI, Data Science and Backend Development.",

      learning: [
        "Variables",
        "Functions",
        "OOP",
        "File Handling",
        "Django",
        "Flask",
        "Machine Learning",
      ],

      projects: [
        "Weather App",
        "Student Management System",
        "AI Chatbot",
        "Quiz App",
        "Face Detection System",
      ],

      interview: [
        "What is Python?",
        "Explain List vs Tuple",
        "What is OOP?",
        "What are Decorators?",
      ],
    },

    3: {
      title: "Java Programming",
      description:
        "Java is an object-oriented programming language widely used in enterprise applications and Android Development.",

      learning: [
        "Core Java",
        "OOP Concepts",
        "Collections Framework",
        "Exception Handling",
        "Multithreading",
        "JDBC",
        "Spring Boot",
      ],

      projects: [
        "Bank Management System",
        "Library Management System",
        "Attendance App",
        "Quiz Application",
      ],

      interview: [
        "What is JVM?",
        "What is JDK?",
        "Explain Inheritance",
        "Difference between Interface and Abstract Class",
      ],
    },

    4: {
      title: "Web Development",
      description:
        "Learn Full Stack Web Development from beginner to advanced level.",

      learning: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],

      projects: [
        "Portfolio Website",
        "Blog Website",
        "E-Commerce Website",
        "Social Media App",
      ],

      interview: [
        "What is HTML?",
        "Difference between let and var?",
        "What is React?",
        "Explain REST API",
      ],
    },
  };

  const group = groups[id];

  if (!group) {
    return <h1>Community Not Found</h1>;
  }

  return (
    <div className="layout">
      <Sidebar />

      <div className="main-content">
        <Navbar />

        <div className="community-page">

          <h1>🚀 {group.title}</h1>

          <p className="community-description">
            {group.description}
          </p>

          {/* Learning Section */}
          <div className="community-card">
            <h2>📚 Learning Topics</h2>

            <ul>
              {group.learning.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div className="community-card">
            <h2>💻 Projects</h2>

            <ul>
              {group.projects.map((project, index) => (
                <li key={index}>{project}</li>
              ))}
            </ul>
          </div>

          {/* Interview */}
          <div className="community-card">
            <h2>❓ Interview Questions</h2>

            <ul>
              {group.interview.map((question, index) => (
                <li key={index}>{question}</li>
              ))}
            </ul>
          </div>

          {/* Discussion */}
          <div className="community-card">
            <h2>💬 Community Discussion</h2>

            <div className="discussion">
              <strong>Admin:</strong>
              <p>
                Welcome to {group.title}. Share your
                projects and ask questions here.
              </p>
            </div>

            <div className="discussion">
              <strong>Student:</strong>
              <p>
                Can someone suggest beginner projects?
              </p>
            </div>

            <div className="discussion">
              <strong>Developer:</strong>
              <p>
                I completed my first project today 🎉
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default CommunityGroup;