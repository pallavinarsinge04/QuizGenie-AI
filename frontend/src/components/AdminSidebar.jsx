import { Link } from "react-router-dom";

function AdminSidebar() {
  return (
    <div
      style={{
        width: "250px",
        height: "100vh",
        background: "#111827",
        color: "white",
        padding: "20px",
      }}
    >
      <h2>Admin Panel</h2>

      <hr />

      <p>
        <Link to="/dashboard" style={{ color: "white" }}>
          Dashboard
        </Link>
      </p>

      <p>
        <Link to="/users" style={{ color: "white" }}>
          Users
        </Link>
      </p>

      <p>
        <Link to="/flashcards" style={{ color: "white" }}>
          Flashcards
        </Link>
      </p>

      <p>
        <Link to="/analytics" style={{ color: "white" }}>
          Analytics
        </Link>
      </p>

      <p>
        <Link to="/certificate" style={{ color: "white" }}>
          Certificates
        </Link>
      </p>
    </div>
  );
}

export default AdminSidebar;