import { useEffect, useState } from "react";

function StudyTimer() {
  const [seconds, setSeconds] = useState(1500);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return (
    <div style={{ padding: "20px" }}>
      <h1>📚 Study Timer</h1>

      <h2>
        {minutes}:{secs.toString().padStart(2, "0")}
      </h2>

      <button>Start Study Session</button>
    </div>
  );
}

export default StudyTimer;