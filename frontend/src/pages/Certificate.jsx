import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "./Certificate.css";

function Certificate() {
  return (
    <div className="certificate-layout">
      <Sidebar />

      <div className="certificate-main">
        <Navbar />

        <div className="certificate-container">

          <h1>🏆 My Certificates</h1>

          <div className="certificate-card">

            <div className="certificate-header">

              <h2>QuizGenie AI</h2>

              <h3>Certificate of Achievement</h3>

            </div>

            <div className="certificate-body">

              <p>This certificate is proudly presented to</p>

              <h1 className="student-name">
                Pallavi Narsinge
              </h1>

              <p>
                for successfully completing the
              </p>

              <h2>
                AI Quiz & Learning Program
              </h2>

              <p>
                with an excellent performance and
                dedication towards learning.
              </p>

            </div>

            <div className="certificate-info">

              <div>
                <strong>Score</strong>
                <p>92%</p>
              </div>

              <div>
                <strong>Date</strong>
                <p>15 June 2026</p>
              </div>

              <div>
                <strong>Certificate ID</strong>
                <p>QGAI-2026-00125</p>
              </div>

            </div>

            <div className="certificate-footer">

              <div>
                ______________________
                <p>Instructor</p>
              </div>

              <div>
                ______________________
                <p>QuizGenie AI</p>
              </div>

            </div>

          </div>

          <div className="button-section">

            <button className="download-btn">
              📥 Download PDF
            </button>

            <button className="print-btn">
              🖨️ Print
            </button>

          </div>

          <div className="achievement-box">

            <h2>🎉 Achievement Summary</h2>

            <ul>

              <li>✅ Completed 25 Quizzes</li>

              <li>✅ Average Score: 88%</li>

              <li>✅ 15-Day Learning Streak</li>

              <li>✅ 150 Flashcards Completed</li>

              <li>✅ Top 10 Leaderboard Rank</li>

            </ul>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Certificate;