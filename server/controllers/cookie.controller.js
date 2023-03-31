const jwt = require('jsonwebtoken');

const secret = 'mern_logsocket';

// @route       GET api/cookie/set
// @description Set JWT in cookie
// @access      Public
function set(req, res, next) {
  const payload = { app: `${secret}_payload` };
  const token   = jwt.sign(payload, secret);

  res.cookie('token', token, {
    httpOnly: true
  }).send('Cookie Shipped');
}

// @route       GET api/cookie/get
// @description Get already created JWT in cookie
// @access      Public
function get(req, res, next) {
  const token   = req.cookies.token;
  const payload = jwt.verify(token, secret);

  res.json({ token, payload });
}

module.exports = {
  get,
  set,
}