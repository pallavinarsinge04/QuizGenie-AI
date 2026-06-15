function Leaderboard() {
  const users = [
    { name: "Pallavi", score: 980 },
    { name: "Rahul", score: 920 },
    { name: "Sneha", score: 890 },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>🏆 Leaderboard</h1>

      {users.map((user, index) => (
        <div key={index}>
          <h3>
            #{index + 1} {user.name}
          </h3>
          <p>Score: {user.score}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Leaderboard;