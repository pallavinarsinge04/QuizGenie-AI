import AdminSidebar from "../components/AdminSidebar";
import Navbar from "../components/Navbar";

function Admin() {
  return (
    <div style={{ display: "flex" }}>
      <AdminSidebar />

      <div style={{ flex: 1 }}>
        <Navbar />

        <div style={{ padding: "20px" }}>
          <h1>Admin Dashboard</h1>

          <h3>Total Users : 150</h3>
          <h3>Total Courses : 35</h3>
          <h3>Total Quizzes : 120</h3>
          <h3>Total Certificates : 50</h3>
        </div>
      </div>
    </div>
  );
}

export default Admin;