import { useState } from "react";
import { createBattle } from "../api/battleApi";

function LiveQuiz() {
  const [player1, setPlayer1] = useState("");
  const [topic, setTopic] = useState("");

  const handleCreate = async () => {
    await createBattle({
      player1,
      topic,
    });

    alert("Battle Created");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Create Live Battle</h1>

      <input
        placeholder="Player Name"
        value={player1}
        onChange={(e) => setPlayer1(e.target.value)}
      />

      <br />
      <br />

      <input
        placeholder="Topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleCreate}>
        Create Battle
      </button>
    </div>
  );
}

export default LiveQuiz;