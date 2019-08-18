const express = require("express");
const router = express.Router();
const DB = require("./resourceHelpers");

router.get("/", async (req, res) => {
  try {
    const resources = await DB.find();
    res.status(200).json(resources);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
