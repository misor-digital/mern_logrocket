const express = require('express');
const cors    = require('cors');
const cp      = require('cookie-parser');

const config = require('./config');
const api    = require('./api');

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));
app.use(cp());

// Routes
app.use('/api', api);

app.get('/', (req, res) => res.send('Hello'));

app.listen(config.port, () => console.log(`Server@port: ${config.port}`));
