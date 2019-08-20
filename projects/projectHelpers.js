const DB = require("../DBconfig.js");

module.exports = {
  find,
  add
};

function find() {
  return DB("projects");
}

function add(body) {
  return DB("projects").insert(body);
}
