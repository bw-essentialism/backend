exports.up = function(knex) {
    return knex.schema.createTable('values', table => {
      table.increments();
      table
        .string('value_name', 64)
        .notNullable()
        .unique();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('values');
  };
  