import mongoose, { Schema } from "mongoose";

const scraperSchema = new Schema({
  siteName: {
    type: String,
    required: true,
  },
  urls: {
    type: [String],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Scraper", scraperSchema);
