const databaseConnector = require('./server/config/database');
const databaseString = require('./server/config/index').databaseString;

databaseConnector(databaseString)
  .then(() => {
    console.log('Database: Connected successfully');

    require('./server/main');
  })
  .catch(console.error);
