import { useEffect, useState } from "react";
import API from "../api/axios";

function ManageFlashcard() {
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    fetchFlashcards();
  }, []);

  const fetchFlashcards = async () => {
    const res = await API.get("/flashcards");
    setFlashcards(res.data);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Manage Flashcards</h1>

      {flashcards.map((card) => (
        <div key={card._id}>
          <h3>{card.question}</h3>
          <p>{card.answer}</p>

          <button>Edit</button>
          <button>Delete</button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default ManageFlashcard;