require("dotenv").config();
const express = require("express");
const { connectToDatabase } = require("./start/database");

const app = express();
const port = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectToDatabase();
    app.listen(port, () => {
      console.log(`Server running. Use our API on port: ${port}`);
    });
  } catch (error) {
    console.error("Failed to start server: ", error);
    process.exit(1);
  }
};

startServer();
