function Navbar() {
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

      <div>
        Welcome Student 👋
      </div>
    </div>
  );
}

export default Navbar;