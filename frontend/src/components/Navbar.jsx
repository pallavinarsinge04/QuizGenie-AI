import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove stored login data
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Redirect to login page
    navigate("/");
  };

  return (
    <div
      style={{
        height: "70px",
        background: "#1E3A8A",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 30px",
        boxShadow: "0 2px 10px rgba(0,0,0,.1)",
      }}
    >
      <h2>🤖 QuizGenie AI</h2>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <span>Welcome Student 👋</span>

        <button
          onClick={handleLogout}
          style={{
            background: "#EF4444",
            color: "#fff",
            border: "none",
            padding: "10px 18px",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.target.style.background = "#DC2626")}
          onMouseOut={(e) => (e.target.style.background = "#EF4444")}
        >
          🚪 Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;