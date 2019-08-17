const express = require("express");
const router = express.Router();
const DB = require("./DBhelpers");

router.get("/", async (req, res) => {
  try {
    const projects = DB.find();
    res.status(200).json({ success: true, message: "no data attached" });
  } catch (err) {
    res.status(400).json({ success: false, err });
  }
});

module.exports = router;
