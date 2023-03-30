const config = require('config');

const env_vars = {
    env            : process.env.NODE_ENV || 'development',
    port           : process.env.PORT     || 8082,
    databaseString : process.env.DB_URI   || config.get('mongoURI'),
}

module.exports = env_vars;