import { useEffect, useState } from "react";
import { getBattles } from "../api/battleApi";
import BattleCard from "../components/BattleCard";

function QuizBattle() {
  const [battles, setBattles] = useState([]);

  useEffect(() => {
    loadBattles();
  }, []);

  const loadBattles = async () => {
    const res = await getBattles();
    setBattles(res.data);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Live Quiz Battles</h1>

      {battles.map((battle) => (
        <BattleCard
          key={battle._id}
          battle={battle}
        />
      ))}
    </div>
  );
}

export default QuizBattle;