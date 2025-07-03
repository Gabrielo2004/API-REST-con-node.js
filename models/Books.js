// models/Books.js
const mongoose = require('mongoose');
const booksSchema = new mongoose.Schema({
    title: { type: String, required: true },
    year: { type: Number, required: true },
    genre: { type: String },
    author: {type: String, required: true}
}, { timestamps: true });
module.exports = mongoose.model('Books', booksSchema);