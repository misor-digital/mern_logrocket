const mongoose = require('mongoose');

function connectToDB(databaseString) {
  return mongoose.connect(
    databaseString,
    {
      useNewUrlParser    : true,
      useUnifiedTopology : true,
    }
  );
}

module.exports = connectToDB;
