exports.up = function(knex) {
  return knex.schema.createTable("projects", tbl => {
    tbl.increments();
    tbl
      .text("project_name", 56)
      .unique()
      .notNullable();
    tbl.text("project_description", 128);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("projects");
};
