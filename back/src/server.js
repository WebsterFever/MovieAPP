const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./routes");

const app = express();

// Logging
app.use(morgan("dev"));

// ✅ CORS (Allow all origins for demo/testing)
app.use(cors());

// If you want slightly controlled version instead:
/*
app.use(cors({
  origin: [
    "http://127.0.0.1:8080",
    "http://localhost:8080",
    "https://your-vercel-app.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
*/

// Parse JSON
app.use(express.json());

// Routes
app.use(router);

module.exports = app;