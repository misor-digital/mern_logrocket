const router  = require('express').Router();
const routers = require('./routers');

// Bind routers to routes
router.use('/books', routers.book);

// Any other route
router.all('*', function (req, res, next) {
  res.status(404).json({ err: 'Resource not found' });
});

module.exports = router;