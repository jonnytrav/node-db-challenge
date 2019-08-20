const express = require("express");
const router = express.Router();
const DB = require("./projectHelpers");

router.get("/", async (req, res) => {
  try {
    const projects = await DB.find();
    res.status(200).json({ projects });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

const postBodyHelper = body => {
  if (!body.completed) {
    return { ...body, completed: 0 };
  } else {
    return body;
  }
};

router.post("/", async (req, res) => {
  const postBody = req.body;
  try {
    const addProject = await DB.add(postBodyHelper(postBody));
    res.json(addProject);
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
});

module.exports = router;
