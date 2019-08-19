exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();
      tbl
        .text("project_name", 32)
        .unique()
        .notNullable();
      tbl.text("project_description", 128);
      tbl
        .integer("completed", 1)
        .unsigned()
        .notNullable();
    })
    .createTable("resources", tbl => {
      tbl.increments();
      tbl
        .text("resource_name", 32)
        .unique()
        .notNullable();
      tbl.text("resource_description", 128);
    })
    .createTable("tasks", tbl => {
      tbl.increments();
      tbl
        .text("task_description", 32)
        .unique()
        .notNullable();
      tbl.text("task_notes", 128);
      tbl
        .integer("completed", 1)
        .unsigned()
        .notNullable();
      tbl
        .integer("project_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("projects");
      // .onUpdate("CASCADE")
      // .onDelete("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
