import dotenv from "dotenv";
import mongoose from "mongoose";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({path: __dirname + '/../../../.env'});

const dbConnection = () =>

  new Promise((resolve, reject) => {
    mongoose.connect(process.env.MONGODB_URL);

  const db = mongoose.connection;

  db.on("error", () => {
    console.error.bind(console, "connection error:");
      reject(
        new Error(
          "Connection error has occurred when trying to connect to the database!"
      )
    );
  });
  db.once("open", () => resolve("🚀 Successful database connection."));
});
export default dbConnection;