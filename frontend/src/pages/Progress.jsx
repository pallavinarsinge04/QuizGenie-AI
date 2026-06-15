function Progress() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Learning Progress</h1>

      <h3>Flashcards : 80%</h3>

      <progress value="80" max="100"></progress>

      <br />
      <br />

      <h3>Quiz : 70%</h3>

      <progress value="70" max="100"></progress>

      <br />
      <br />

      <h3>Coding : 60%</h3>

      <progress value="60" max="100"></progress>
    </div>
  );
}

export default Progress;