import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "./Flashcards.css";

function Flashcards() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const [flashcards, setFlashcards] = useState([
    {
      id: 1,
      question: "What is React?",
      answer: "A JavaScript Library for UI.",
    },
    {
      id: 2,
      question: "What is JSX?",
      answer: "JavaScript XML Syntax.",
    },
  ]);

  const addFlashcard = () => {
    if (!question || !answer) return;

    setFlashcards([
      ...flashcards,
      {
        id: Date.now(),
        question,
        answer,
      },
    ]);

    setQuestion("");
    setAnswer("");
  };

  const deleteCard = (id) => {
    setFlashcards(flashcards.filter((item) => item.id !== id));
  };

  return (
    <div className="flash-layout">
      <Sidebar />

      <div className="flash-main">
        <Navbar />

        <div className="flash-container">
          <h1>📚 Flashcards</h1>

          <div className="add-card">
            <input
              placeholder="Question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />

            <input
              placeholder="Answer"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />

            <button onClick={addFlashcard}>
              Add Flashcard
            </button>
          </div>

          <div className="cards-grid">
            {flashcards.map((card) => (
              <div className="flash-card" key={card.id}>
                <h3>{card.question}</h3>

                <p>{card.answer}</p>

                <div className="btn-group">
                  <button className="edit-btn">
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => deleteCard(card.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flashcards;