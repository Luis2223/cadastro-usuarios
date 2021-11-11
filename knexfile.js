// Update with your config settings.

module.exports = {
  client: 'postgresql',
  connection: {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'postgres'
  },
  migrations: {
    directory: './src/app/database/migrations',
    tableName: 'knex_migrations'
  }
};
