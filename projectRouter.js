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
    const addProject = DB.add(postBodyHelper(postBody));
    res.json(addProject);
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
});

module.exports = router;
