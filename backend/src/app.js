// Configure environment variables
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import morgan from "morgan";

// Set's our port to the PORT environment variable, or 3000 by default if the env is not configured.
const PORT = process.env.PORT ?? 3000;

// Creates the express server
const app = express();

// Configure middleware (logging, CORS support, JSON parsing support, static files support)
app.use(morgan("combined"));
app.use(cors());
app.use(express.json());
// app.use(express.static("public")); // No need for this middleware for this project.

// Import and use our application routes.
import routes from "./routes/routes.js";
app.use("/", routes);

// Make sure our database is up and running
import { getDatabase } from "./data/database.js";
await getDatabase();

// Start the server running.
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
