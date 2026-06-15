import { BrowserRouter, Routes, Route } from "react-router-dom";
import LiveQuiz from "./pages/LiveQuiz";
import QuizBattle from "./pages/QuizBattle";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Flashcards from "./pages/Flashcards";
import AIQuiz from "./pages/AIQuiz";
import QuizHistory from "./pages/QuizHistory";
import Analytics from "./pages/Analytics";
import Certificate from "./pages/Certificate";
import VideoLearning from "./pages/VideoLearning";
import ChatAssistant from "./pages/ChatAssistant";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/flashcards" element={<Flashcards />} />
        <Route path="/quiz" element={<AIQuiz />} />
        <Route path="/history" element={<QuizHistory />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/videos" element={<VideoLearning />} />
        <Route path="/chat" element={<ChatAssistant />} />
        <Route path="/livequiz" element={<LiveQuiz />} />
        <Route path="/battle" element={<QuizBattle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;