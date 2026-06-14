const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");
connectDB();

const app = express();

app.use(cors());

// This line is required
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});