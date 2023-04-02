const models = require('../models');

// @route       GET api/books
// @description Get all books
// @access      Public
function get(req, res, next) {
  models.Book.find()
    .then(books => res.json(books))
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

// @route       POST api/books
// @description Add/save book
// @access      Public
function create(req, res, next) {
  const data = req.body;
  if (!data) {
    res.status(400).json({ err: 'no book data' });
  }

  models.Book.create(data)
    .then(book => res.json({ msg: 'Book added successfully' }))
    .catch(err => res.status(400).json({ err: 'Missing data: Unable to add the record' }));
}

// @route       PUT api/books/:id
// @description Update book by id
// @access      Public
function update(req, res, next) {
  const id   = req.params.id;
  const data = req.body;

  if (!id) {
    res.status(400).json({ err: 'id missing' });
  }

  if (!data) {
    res.status(400).json({ err: 'no book data' });
  }

  models.Book.findByIdAndUpdate(id, data)
    .then(book => res.json({ msg: 'Book updated successfully'}))
    .catch(err => res.status(400).json({ err: 'Missing data: Unable to update the database' }));
}

// @route       DELETE api/books/:id
// @description Delete book by id
// @access      Public
function deleteBook(req, res, next) {
  const id   = req.params.id;
  const data = req.body;

  if (!id) {
    res.status(400).json({ err: 'id missing' });
  }

  if (!data) {
    res.status(400).json({ err: 'no book data' });
  }

  models.Book.findByIdAndRemove(id)
    .then(book => res.json({ msg: 'Book deleted successfully' }))
    .catch(err => res.status(404).json({ err: 'No such book'}));
}

module.exports = {
  get,
  getById,
  create,
  update,
  delete: deleteBook
};
