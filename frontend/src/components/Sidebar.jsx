import { Link } from "react-router-dom";
import {
  FaHome,
  FaBook,
  FaRobot,
  FaChartBar,
  FaUser
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="w-64 bg-blue-900 text-white h-screen p-5">

      <h1 className="text-3xl font-bold mb-10">
        QuizGenie AI
      </h1>

      <nav className="space-y-5">

        <Link to="/dashboard" className="flex items-center gap-3 hover:text-yellow-300">
          <FaHome />
          Dashboard
        </Link>

        <Link to="/flashcards" className="flex items-center gap-3 hover:text-yellow-300">
          <FaBook />
          Flashcards
        </Link>

        <Link to="/quiz" className="flex items-center gap-3 hover:text-yellow-300">
          <FaRobot />
          AI Quiz
        </Link>

        <Link to="/analytics" className="flex items-center gap-3 hover:text-yellow-300">
          <FaChartBar />
          Analytics
        </Link>

        <Link to="/profile" className="flex items-center gap-3 hover:text-yellow-300">
          <FaUser />
          Profile
        </Link>

      </nav>

    </div>
  );
}