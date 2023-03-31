const models = require('../models');

// @route       GET api/books
// @description Get all books
// @access      Public
function get(req, res, next) {
  models.Book.find()
    .then(books => res.join(books))
    .catch(err => res.status(404).json({ nobooksfound: 'No Books found' }));
}

// @route       GET api/books/:id
// @description Get single book by id
// @access      Public
function getById(req, res, next) {
  const id = req.params.id;
  if (!id) {
    res.status(400).json({ err: 'id missing' });
  }

  models.Book.findById(req.params.id)
    .then(book => res.json(book))
    .catch(err => res.status(404).json({ nobooksfound: 'No Books found' }));  
}

module.exports = {
  get,
  getById,
};
