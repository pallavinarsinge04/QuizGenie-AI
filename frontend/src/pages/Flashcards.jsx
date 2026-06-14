import { useEffect, useState } from "react";
import API from "../api/axios";

function Flashcards() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [flashcards, setFlashcards] = useState([]);

  const loadFlashcards = async () => {
    const res = await API.get("/flashcards");
    setFlashcards(res.data);
  };

  useEffect(() => {
    loadFlashcards();
  }, []);

  const addFlashcard = async () => {
    await API.post("/flashcards", {
      question,
      answer,
    });

    setQuestion("");
    setAnswer("");

    loadFlashcards();
  };

  const deleteFlashcard = async (id) => {
    await API.delete(`/flashcards/${id}`);

    loadFlashcards();
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Flashcards</h1>

      <input
        placeholder="Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <br />
      <br />

      <input
        placeholder="Answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />

      <br />
      <br />

      <button onClick={addFlashcard}>Add Flashcard</button>

      <hr />

      {flashcards.map((card) => (
        <div
          key={card._id}
          style={{
            border: "1px solid gray",
            padding: "15px",
            marginTop: "15px",
          }}
        >
          <h3>{card.question}</h3>

          <p>{card.answer}</p>

          <button onClick={() => deleteFlashcard(card._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Flashcards;