const express = require('express');
const app = express();
const { handler } = require('./middleware/error');
const connection = require('./middleware/connection');
const ipsums = require('../lib/routes/ipsums');

app.use(express.json());
app.use('/ipsums', connection, ipsums);
app.use(handler);
module.exports = app;
