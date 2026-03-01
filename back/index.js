const express = require("express");
const cors = require("cors");
const dbConnect = require("../back/src/config/dbCon");
const routes = require("../back/src/routes");

const app = express();

app.use(cors()); // ✅ allow all origins for now

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