const router      = require('express').Router();
const controllers = require('../controllers');

router.post(  '/',     controllers.book.create);
router.get(   '/',     controllers.book.get);
router.get(   '/:id?', controllers.book.getById);
router.put(   '/:id?', controllers.book.update);
router.delete('/:id?', controllers.book.delete);

module.exports = router;
