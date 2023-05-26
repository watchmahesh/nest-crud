/* eslint-disable prettier/prettier */
module.exports = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'karki123',
    database: 'nest-crud',
    synchronize: true,
    entities: ['src/**/*.entity.ts'],
    cli: {
      migrationsDir: 'src/migrations',
    },
  };