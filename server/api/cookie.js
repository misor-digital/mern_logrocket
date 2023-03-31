const router      = require('express').Router();
const controllers = require('../controllers');

router.get('/set', controllers.cookie.set);
router.get('/get', controllers.cookie.get);

module.exports = router;
