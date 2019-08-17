const express = require("express");
const server = express();
const projectRouter = require("./projectRouter.js");

server.use(express.json());
server.use("/api/projects", projectRouter);

const PORT = 4000;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
