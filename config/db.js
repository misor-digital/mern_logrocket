const mongoose = require('mongoose');

function connectToDB() {
    const databaseString = require('./index').databaseString;

    return mongoose.connect(
        databaseString,
        {
            useCreateIndex     : true,
            useNewUrlParser    : true,
            useUnifiedTopology : true,
        }
    );
}

module.exports = connectToDB;