export default function FlashcardCard({
  card,
}) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h3>{card.question}</h3>

      <p>{card.answer}</p>

      <small>{card.category}</small>
    </div>
  );
}