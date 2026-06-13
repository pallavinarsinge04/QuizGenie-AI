const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/flashcards", require("./routes/flashcardRoutes"));
app.use("/api/quiz", require("./routes/quizRoutes"));
app.use("/api/ai", require("./routes/aiRoutes"));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});