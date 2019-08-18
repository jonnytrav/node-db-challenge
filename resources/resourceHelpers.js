const DB = require("../DBconfig.js");

module.exports = {
  find,
  findById,
  add
};

function find() {
  return DB("resources");
}

function findById(id) {
  return DB("resources")
    .where({ id })
    .first();
}

//BELOW COMMENTED OUT DOES NOT WORK FOR SOME REASON
function add(body) {
  return DB("resources").insert(body);
  // .then(id => {
  //   findById(id);
  // });
}
