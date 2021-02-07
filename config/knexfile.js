module.exports = {
    development:{
        client: 'mysql',
        connection: {
            host: 'localhost',
            user: 'root',
            password: '123456',
            database: 'knex'
        },
        migrations: {
            directory: './migrations',
            tableName: 'knex_migrations',
          },
    }
}