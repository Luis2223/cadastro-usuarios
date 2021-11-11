
exports.up = function(knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments('id').primary().unsigned();
        table.string('email', 50).notNullable();
        table.string('password', 255).notNullable();

        table.timestamp('createdAt').defaultTo(knex.fn.now());
        table.timestamp('updatedAt');
    })
};

exports.down = function(knex) {
    return knex.dropTableIfExists('users')
};
