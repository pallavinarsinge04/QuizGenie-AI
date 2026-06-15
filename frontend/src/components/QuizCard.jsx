export default function QuizCard({ question }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        marginTop: "20px",
      }}
    >
      <h3>{question.question}</h3>

      {question.options.map((option, index) => (
        <p key={index}>{option}</p>
      ))}
    </div>
  );
}