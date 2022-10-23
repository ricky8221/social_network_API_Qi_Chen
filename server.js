const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(require('./routes'));




mongoose.set('debug', true);

app.listen(PORT, () => console.log(` ************** Connected on localhost:${PORT} ************* `));