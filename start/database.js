require("dotenv").config();
const mongoose = require("mongoose");

const pathdb = process.env.MONGO_SECRET;

if (!pathdb) {
  console.error("No db secret...");
  process.exit(1);
}

const connectToDatabase = async () => {
  try {
    await mongoose.connect(pathdb);
    console.log("Database connection successful");
  } catch (err) {
    console.error("Error to connect to db: " + err);
    process.exit(1);
  }
};

module.exports = { connectToDatabase };
