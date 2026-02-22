const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./routes");

const app = express();

app.use(morgan("dev"));

app.use(cors({
  origin: ["http://127.0.0.1:8080", "http://localhost:8080"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());
app.use(router);

module.exports = app;