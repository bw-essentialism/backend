exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
      table.increments();
      table
        .string('username', 32)
        .notNullable()
        .unique();
      table.string('password', 32).notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.string('email', 32);
      table.string('firstName', 32);
      table.string('lastName', 32);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
  };
  