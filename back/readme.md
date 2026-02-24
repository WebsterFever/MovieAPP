1️⃣ Index Flow (Application Entry Point)

This file is responsible for:

Importing everything

Connecting the database

Starting the server

Pattern:

Require express → create server
Require cors → allow frontend access
Require dbConnect → connect database
Require routes → load endpoints

Create app = express()

Use cors()
Use express.json()
Use routes

Connect database

If DB connects → start server
If DB fails → stop

Listen on a port

👉 This is the startup / bootstrap pattern.

🧠 2️⃣ Server Flow (App Configuration Only)

This file is responsible for:

Configuring the app

Registering middleware

Registering routes

Exporting the app

Pattern:

Require express → create server
Require morgan → log HTTP requests
Require cors → allow frontend access
Require router → load endpoints

Create app = express()

Use morgan("dev")
Use cors()
Use express.json()
Use router

Export app

👉 This is the configuration pattern.