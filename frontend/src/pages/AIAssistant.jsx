import { useState } from "react";
import API from "../api/axios";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function AIAssistant() {
  const [message, setMessage] =
    useState("");

  const [chat, setChat] = useState([]);

  const sendMessage = async () => {
    if (!message) return;

    try {
      const res = await API.post(
        "/ai/chat",
        {
          message,
        }
      );

      setChat([
        ...chat,
        {
          user: message,
          ai: res.data.reply,
        },
      ]);

      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="layout">
      <Sidebar />

      <div className="main-content">
        <Navbar />

        <h1>🤖 AI Chat Assistant</h1>

        <div className="chat-box">
          {chat.map((msg, index) => (
            <div key={index}>
              <p>
                <strong>You:</strong>{" "}
                {msg.user}
              </p>

              <p>
                <strong>AI:</strong>{" "}
                {msg.ai}
              </p>

              <hr />
            </div>
          ))}
        </div>

        <input
          type="text"
          placeholder="Ask anything..."
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
        />

        <button onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}

export default AIAssistant;