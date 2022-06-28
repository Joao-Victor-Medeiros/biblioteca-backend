const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const books_controller = require('./books_controller');
const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(cors());

mongoose.connect('mongodb://localhost:27017/biblioteca', {useNewUrlParser: true});

app.use('/books', books_controller);

app.listen(3000)