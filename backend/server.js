const express = require("express");
const cors = require("cors");
require("dotenv").config();

console.log("Step 1");

const connectDB = require("./config/db");

console.log("Step 2");

const app = express();

(async () => {
  try {
    await connectDB();

    console.log("Step 3");

    app.use(cors());
    app.use(express.json());

    console.log("Step 4");

    app.use("/api/auth", require("./routes/authRoutes"));
    app.use("/api/user", require("./routes/userRoutes"));
    app.use("/api/users", require("./routes/userRoutes"));
    app.use("/api/quiz", require("./routes/quizRoutes"));
    app.use("/api/flashcards", require("./routes/flashcardRoutes"));
    app.use("/api/ai", require("./routes/aiRoutes"));

    console.log("Step 5");

    app.get("/", (req, res) => {
      res.send("QuizGenie AI Backend Running");
    });

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`✅ Server running on port ${PORT}`);
    });

  } catch (err) {
    console.error(err);
  }
})();