// controllers/bookController.js
const Book = require('../models/Books');

exports.createBook = async (req, res, next) => {
    try {
        const book = new Book(req.body);
        await book.save();
        res.status(201).json(book);
    } catch (err) {
        next(err);
    }
};

exports.getBooks = async (req, res, next) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        next(err);
    }
};

exports.getBookById = async (req, res, next) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).json({ error: 'Libro no encontrado' });
        res.json(book);
    } catch (err) {
        next(err);
    }
};

exports.updateBook = async (req, res, next) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!book) return res.status(404).json({ error: 'Libro no encontrado' });
        res.json(book);
    } catch (err) {
        next(err);
    }
};

exports.deleteBook = async (req, res, next) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) return res.status(404).json({ error: 'Libro no encontrado' });
        res.json({ message: 'Libro eliminado' });
    } catch (err) {
        next(err);
    }
};
