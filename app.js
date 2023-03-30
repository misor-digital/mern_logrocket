const express   = require('express');
const connectDB = require('./config/db');

const app     = express();

connectDB();

const port    = process.env.PORT || 8082;

app.get('/', (req, res) => res.send('Hello'));
app.listen(port, () => console.log(`Server running on port ${port}`));
