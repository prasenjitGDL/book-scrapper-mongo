import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import scraperRoute from "./routes/scraper.js";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to DB");
  } catch (err) {
    console.error("Failed to connect to DB:", err);
  }
};

app.use(cors());
app.use(express.json())

app.use("/api/scraper", scraperRoute);

app.listen(process.env.PORT || 8000, () => {
  connect();
  console.log("Started server");
});
