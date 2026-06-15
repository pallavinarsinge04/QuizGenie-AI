import { useState } from "react";

function MockInterview() {
  const [question] = useState(
    "Explain Virtual DOM in React."
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>🎤 AI Mock Interview</h1>

      <h2>{question}</h2>

      <textarea
        rows="8"
        cols="80"
        placeholder="Write your answer..."
      />

      <br />
      <br />

      <button>Submit Answer</button>
    </div>
  );
}

export default MockInterview;