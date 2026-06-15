function BattleCard({ battle }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "20px",
        marginBottom: "20px",
        borderRadius: "10px",
      }}
    >
      <h2>{battle.topic}</h2>

      <h3>
        {battle.player1} VS {battle.player2}
      </h3>

      <p>Player 1 Score : {battle.score1}</p>

      <p>Player 2 Score : {battle.score2}</p>

      <p>Status : {battle.status}</p>

      <h3>Winner : {battle.winner}</h3>
    </div>
  );
}

export default BattleCard;