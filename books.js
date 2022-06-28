var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var booksSchema = new Schema({
    name: String,
    author: String,
    date: String,
}, {versionKey: false});

module.exports = mongoose.model("Books", booksSchema)