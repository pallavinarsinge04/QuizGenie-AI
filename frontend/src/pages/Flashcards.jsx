import { useEffect, useState } from "react";
import {
  getFlashcards,
  createFlashcard,
  deleteFlashcard,
} from "../api/flashcardApi";

export default function Flashcards() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [category, setCategory] = useState("");
  const [flashcards, setFlashcards] = useState([]);

  const loadFlashcards = async () => {
    const res = await getFlashcards();
    setFlashcards(res.data);
  };

  useEffect(() => {
    loadFlashcards();
  }, []);

  const addFlashcard = async () => {
    await createFlashcard({
      question,
      answer,
      category,
    });

    setQuestion("");
    setAnswer("");
    setCategory("");

    loadFlashcards();
  };

  const removeFlashcard = async (id) => {
    await deleteFlashcard(id);
    loadFlashcards();
  };

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-6">
        Flashcards
      </h1>

      <input
        className="border p-2 m-2"
        placeholder="Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <input
        className="border p-2 m-2"
        placeholder="Answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />

      <input
        className="border p-2 m-2"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <button
        className="bg-blue-600 text-white p-2 rounded"
        onClick={addFlashcard}
      >
        Add Flashcard
      </button>

      <div className="mt-8">
        {flashcards.map((card) => (
          <div
            key={card._id}
            className="border p-4 rounded shadow mb-4"
          >
            <h2 className="font-bold">
              {card.question}
            </h2>

            <p>{card.answer}</p>

            <p className="text-gray-500">
              {card.category}
            </p>

            <button
              className="bg-red-500 text-white px-3 py-1 mt-2 rounded"
              onClick={() => removeFlashcard(card._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}