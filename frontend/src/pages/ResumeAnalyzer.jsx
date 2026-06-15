import { useState } from "react";

function ResumeAnalyzer() {
  const [file, setFile] = useState(null);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Resume Analyzer</h1>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <br />
      <br />

      {file && <h3>{file.name}</h3>}

      <button>Analyze Resume</button>
    </div>
  );
}

export default ResumeAnalyzer;