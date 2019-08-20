const express = require("express");
const server = express();
const projectRouter = require("./projects/projectRouter.js");
const resourceRouter = require("./resources/resourceRouter.js");
const taskRouter = require("./tasks/taskRouter.js");

server.use(express.json());
server.use("/api/projects", projectRouter);
server.use("/api/resources", resourceRouter);
server.use("/api/tasks", taskRouter);

const PORT = 4000;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
