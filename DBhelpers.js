const knex = require("knex");
const DB = knex(require("./knexfile").development);

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
