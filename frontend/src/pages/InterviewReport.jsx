function InterviewReport() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Interview Report</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Skill</th>
            <th>Score</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>React</td>
            <td>90%</td>
          </tr>

          <tr>
            <td>Node.js</td>
            <td>85%</td>
          </tr>

          <tr>
            <td>Communication</td>
            <td>80%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default InterviewReport;