// validators/bookValidator.js
const Joi = require('joi');
exports.booksSchema = Joi.object({
    title: Joi.string().required(),
    year: Joi.number().integer().required(),
    genre: Joi.string().optional(),
    author: Joi.string().required()
});
