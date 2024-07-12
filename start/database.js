const mongoose = require("mongoose");

const pathdb = process.env.MONGO_SECRET;

if (!pathdb) {
  console.error("No db secret...");
}

const connectToDatabase = async () => {
  await mongoose
    .connect(pathdb)
    .then(() => console.log("Database connection successful"))
    .catch((err) => {
      console.log("Error to connect to db" + err);
      process.exit(1);
    });
};

module.exports = { connectToDatabase };
