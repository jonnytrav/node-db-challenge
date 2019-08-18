const DB = require("../DBconfig.js");

module.exports = {
  find
};

function find() {
  return DB("resources");
}
