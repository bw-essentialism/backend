exports.up = function(knex) {
    return knex.schema.createTable('user-values', table => {
      table.increments();
      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table
        .integer('value_id')
        .unsigned()
        .references('id')
        .inTable('values')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('user-values');
  };
  