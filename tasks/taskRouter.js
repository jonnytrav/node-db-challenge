const express = require("express");
const router = express.Router();
const DB = require("./taskHelpers.js");

router.get("/", async (req, res) => {
  try {
    const tasks = await DB.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

router.post("/", async (req, res) => {
  const body = req.body;
  try {
    const task = await DB.add(body);
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
