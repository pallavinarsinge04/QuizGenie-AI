const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

// Connect Database
connectDB();

const app = express();

// Middleware
app.use(cors());

// This line is REQUIRED to read JSON from Postman
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));

// Test Route
app.get("/", (req, res) => {
  res.send("QuizGenie AI Backend Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});