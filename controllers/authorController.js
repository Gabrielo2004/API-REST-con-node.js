// controllers/authorController.js
const Author = require('../models/Author');

exports.createAuthor = async (req, res, next) => {
    try {
        const author = new Author(req.body);
        await author.save();
        res.status(201).json(author);
    } catch (err) {
        next(err);
    }
};

exports.getAuthors = async (req, res, next) => {
    try {
        const authors = await Author.find();
        res.json(authors);
    } catch (err) {
        next(err);
    }
};

exports.getAuthorById = async (req, res, next) => {
    try {
        const author = await Author.findById(req.params.id);
        if (!author) return res.status(404).json({ error: 'Autor no encontrado' });
        res.json(author);
    } catch (err) {
        next(err);
    }
};

exports.updateAuthor = async (req, res, next) => {
    try {
        const author = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!author) return res.status(404).json({ error: 'Autor no encontrado' });
        res.json(author);
    } catch (err) {
        next(err);
    }
};

exports.deleteAuthor = async (req, res, next) => {
    try {
        const author = await Author.findByIdAndDelete(req.params.id);
        if (!author) return res.status(404).json({ error: 'Autor no encontrado' });
        res.json({ message: 'Autor eliminado' });
    } catch (err) {
        next(err);
    }
};
