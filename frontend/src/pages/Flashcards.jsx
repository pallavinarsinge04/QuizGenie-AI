import { useEffect, useState } from "react";
import API from "../api/axios";

export default function Flashcards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    loadCards();
  }, []);

  const loadCards = async () => {
    const res = await API.get("/flashcards");
    setCards(res.data);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Flashcards</h1>

      {cards.map((card) => (
        <div
          key={card._id}
          style={{
            border: "1px solid gray",
            padding: 10,
            marginTop: 10,
          }}
        >
          <h3>{card.question}</h3>

          <p>{card.answer}</p>

          <small>{card.category}</small>
        </div>
      ))}
    </div>
  );
}