import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AIQuiz from "./pages/AIQuiz";
import Flashcards from "./pages/Flashcards";
import QuizHistory from "./pages/QuizHistory";
import Analytics from "./pages/Analytics";
import Community from "./pages/Community";
import ChatAssistant from "./pages/ChatAssistant";
import Leaderboard from "./pages/Leaderboard";
import Profile from "./pages/Profile";
import CommunityGroup from "./pages/CommunityGroup";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/quiz" element={<AIQuiz />} />
      <Route path="/flashcards" element={<Flashcards />} />
      <Route path="/history" element={<QuizHistory />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/community" element={<Community />} />
      <Route path="/chat" element={<ChatAssistant />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/community/:id" element={<CommunityGroup />}/>
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
}

export default App;