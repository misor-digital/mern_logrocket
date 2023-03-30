const databaseConnector = require('./server/config/database');

databaseConnector()
  .then(() => {
    console.log('Database: Connected successfully');

    require('./server/main');
  })
  .catch(console.error);