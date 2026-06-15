import { useState } from "react";

export default function FlashcardForm({ onAdd }) {
  const [form, setForm] = useState({
    question: "",
    answer: "",
    category: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);

    setForm({
      question: "",
      answer: "",
      category: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow mb-6">

      <h2 className="text-xl font-bold mb-4">
        Add Flashcard
      </h2>

      <input
        className="border p-2 w-full mb-3"
        placeholder="Question"
        value={form.question}
        onChange={(e) =>
          setForm({ ...form, question: e.target.value })
        }
      />

      <textarea
        className="border p-2 w-full mb-3"
        placeholder="Answer"
        value={form.answer}
        onChange={(e) =>
          setForm({ ...form, answer: e.target.value })
        }
      />

      <input
        className="border p-2 w-full mb-3"
        placeholder="Category"
        value={form.category}
        onChange={(e) =>
          setForm({ ...form, category: e.target.value })
        }
      />

      <button className="bg-blue-600 text-white px-5 py-2 rounded">
        Add
      </button>
    </form>
  );
}