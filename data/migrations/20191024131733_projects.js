exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
        tbl.increments();

        tbl.string('name', 256)
            .notNullable();

        tbl.text('description');

        tbl.integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('projects')
    };