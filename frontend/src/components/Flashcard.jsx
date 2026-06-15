import { useState } from "react";

function Flashcard({ question, answer }) {
  const [flip, setFlip] = useState(false);

  return (
    <div
      onClick={() => setFlip(!flip)}
      style={{
        width: "320px",
        height: "180px",
        border: "2px solid #2563eb",
        borderRadius: "10px",
        padding: "20px",
        cursor: "pointer",
        background: "#fff",
        marginBottom: "20px",
      }}
    >
      {flip ? (
        <>
          <h3>Answer</h3>
          <p>{answer}</p>
        </>
      ) : (
        <>
          <h3>Question</h3>
          <p>{question}</p>
        </>
      )}
    </div>
  );
}

export default Flashcard;