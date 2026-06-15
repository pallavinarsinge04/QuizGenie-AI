export default function FlashcardCard({
  card,
  onDelete,
}) {
  return (
    <div className="bg-white p-5 rounded shadow">

      <h2 className="text-xl font-bold">
        {card.question}
      </h2>

      <p className="mt-3">
        {card.answer}
      </p>

      <span className="text-blue-600">
        {card.category}
      </span>

      <div className="mt-4">

        <button
          onClick={() => onDelete(card._id)}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Delete
        </button>

      </div>
    </div>
  );
}