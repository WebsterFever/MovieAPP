const express = require("express");
const cors = require("cors");
const dbConnect = require("../back/src/config/dbCon");
const routes = require("../back/src/routes");

const app = express();


app.use(cors({
    origin: ["http://127.0.0.1:8080", "http://localhost:8080"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use(express.json());
app.use(routes);

dbConnect()
    .then(() => {
        console.log("Database connected successfully.");

        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    })
    .catch((error) => {
        console.error("Database connection error:", error);
        process.exit(1);
    });