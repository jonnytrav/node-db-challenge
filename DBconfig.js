const knex = require("knex");
const DB = knex(require("./knexfile").development);

module.exports = {
  find
};

function find() {
  return DB("projects");
}
