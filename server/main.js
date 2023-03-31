const express = require('express');

const config = require('./config');
const api    = require('./api');

const app = express();

app.use('/api', api);
app.get('/', (req, res) => res.send('Hello'));

app.listen(config.port, () => console.log(`Server@port: ${config.port}`));
