function CertificateTemplate({ name, course, score }) {
  return (
    <div
      style={{
        width: "900px",
        margin: "20px auto",
        border: "8px solid navy",
        padding: "50px",
        textAlign: "center",
      }}
    >
      <h1>Certificate of Achievement</h1>

      <h2>This certifies that</h2>

      <h1>{name}</h1>

      <h3>has successfully completed</h3>

      <h2>{course}</h2>

      <h3>with a score of {score}%</h3>

      <br />

      <h4>QuizGenie AI</h4>
    </div>
  );
}

export default CertificateTemplate;