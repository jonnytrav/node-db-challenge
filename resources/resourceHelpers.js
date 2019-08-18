const DB = require("../DBconfig.js");

module.exports = {
  find,
  add
};

function find() {
  return DB("resources");
}

function add(body) {
  return DB("resources").insert(body);
}
