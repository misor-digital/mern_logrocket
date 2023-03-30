const models = require('../models');

function get(req, res, next) {
  models.Book.find()
    .then(books => res.join(books))
    .catch(err => res.status(404).json({ nobooksfound: 'No Books found' }));
};

module.exports = {
  get,
};
