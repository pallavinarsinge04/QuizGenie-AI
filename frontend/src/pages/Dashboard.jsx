import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";

export default function Dashboard() {
  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">

        <Navbar />

        <div className="p-8">

          <div className="grid grid-cols-4 gap-5">

            <StatCard
              title="Flashcards"
              value="320"
            />

            <StatCard
              title="AI Quizzes"
              value="65"
            />

            <StatCard
              title="Average Score"
              value="92%"
            />

            <StatCard
              title="Study Streak"
              value="21 Days"
            />

          </div>

          <div className="bg-white mt-10 p-8 rounded shadow">

            <h2 className="text-2xl font-bold mb-4">
              Welcome to QuizGenie AI
            </h2>

            <p>
              Continue learning, generate AI quizzes,
              manage flashcards, and track your progress
              from one dashboard.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}