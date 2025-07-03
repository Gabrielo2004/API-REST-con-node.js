// models/Author.js
const mongoose = require('mongoose');
const authorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    nationality: { type: String, required: true },
    birth: { type: Number, required: true },
    books: { type: String, required: true }
}, { timestamps: true });
module.exports = mongoose.model('Author', authorSchema);