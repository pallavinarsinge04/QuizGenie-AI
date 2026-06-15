import { useState } from "react";

export default function ChatBot() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  const sendMessage = async () => {
    setReply("Thinking...");

    setTimeout(() => {
      setReply("AI Response: " + message);
    }, 1000);
  };

  return (
    <div>
      <h2>AI Chat Assistant</h2>

      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask a question"
      />

      <button onClick={sendMessage}>
        Send
      </button>

      <p>{reply}</p>
    </div>
  );
}