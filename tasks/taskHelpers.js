const DB = require("../DBconfig.js");

module.exports = {
  find,
  add
};

function find() {
  return DB("tasks");
}

function add(body) {
  return DB("tasks").insert(body);
}
