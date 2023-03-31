const cp  = require('cookie-parser');
const jwt = require('jsonwebtoken');

// @route       GET api/cookie/set
// @description Set JWT in cookie
// @access      Public
function set(req, res, next) {
  const payload = {
    app: 'mern_logrocket',
  };

  
}