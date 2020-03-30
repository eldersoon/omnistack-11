// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'om11'
    },
    migrations: {
      directory: './src/database/migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'om11'
    },
    migrations: {
      directory: './src/database/migrations'
    }
  }

};
