const router      = require('express').Router();
const controllers = require('../controllers');

router.get('/', controllers.book.get)

module.exports = router;
