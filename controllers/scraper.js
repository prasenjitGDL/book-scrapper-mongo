import {scraper} from "../services/test.js";

export const saveData = async (req, res) => {
  try {
    await scraper()
    return res.status(200).json({message: "Saved successfully"});
  } catch (error) {
    console.log("saveData:", error);
    return res.status(500).json({ error: "Error while saving data" });
  }
};
