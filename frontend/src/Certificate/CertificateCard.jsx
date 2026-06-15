function CertificateCard({ certificate }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "20px",
        marginTop: "20px",
      }}
    >
      <h2>{certificate.title}</h2>

      <p>
        Student: {certificate.name}
      </p>

      <p>
        Score: {certificate.score}%
      </p>

      <button>
        Download Certificate
      </button>
    </div>
  );
}

export default CertificateCard;