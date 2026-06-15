export default function QuizCard({
  quiz,
}) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        marginBottom: "15px",
      }}
    >
      <h3>{quiz.topic}</h3>

      <p>Score: {quiz.score}</p>

      <p>Percentage: {quiz.percentage}%</p>
    </div>
  );
}