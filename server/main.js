const express = require('express');
const cp      = require('cookie-parser');

const config = require('./config');
const api    = require('./api');

const app = express();

app.use(cp());
app.use('/api', api);
app.get('/', (req, res) => res.send('Hello'));

app.listen(config.port, () => console.log(`Server@port: ${config.port}`));
