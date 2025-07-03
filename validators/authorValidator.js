// validators/authorValidator.js
const Joi = require('joi');
exports.authorSchema = Joi.object({
    name: Joi.string().required(),
    nationality: Joi.string().required(),
    birth: Joi.number().integer().required()
});