function AIQuiz() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>🤖 AI Quiz Generator</h1>

      <input placeholder="Enter Topic" />

      <br />
      <br />

      <select>
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
      </select>

      <br />
      <br />

      <button>Generate Quiz</button>
    </div>
  );
}

export default AIQuiz;