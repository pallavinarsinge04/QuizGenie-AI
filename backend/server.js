require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

console.log("OPENAI_API_KEY:", process.env.OPENAI_API_KEY);

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/analytics", require("./routes/analyticsRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/flashcards", require("./routes/flashcardRoutes"));
app.use("/api/quiz", require("./routes/quizRoutes"));
app.use("/api/ai", require("./routes/aiRoutes"));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});