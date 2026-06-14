import { BrowserRouter, Routes, Route } from "react-router-dom";
import Flashcards from "./pages/Flashcards";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Dashboard />}
        />

      </Routes>
      <Route
  path="/flashcards"
  element={<Flashcards />}
/>

    </BrowserRouter>
  );
}

export default App;