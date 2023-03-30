const express = require('express');

const config = require('./config');

const app = express();

app.get('/', (req, res) => res.send('Hello'));
app.listen(config.port, () => console.log(`Server@port: ${config.port}`));
