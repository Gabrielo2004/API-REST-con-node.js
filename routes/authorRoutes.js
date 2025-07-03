// routes/authorRoutes.js
const express = require('express');
const router = express.Router();
const {
  createAuthor,
  getAuthors,
  getAuthorById,
  updateAuthor,
  deleteAuthor
} = require('../controllers/authorController');
const validate = require('../middleware/validate');
const auth = require('../middleware/auth');
const { authorSchema } = require('../validators/authorValidator');

router.use(auth); // Proteger todas las rutas

router.post('/', validate(authorSchema), createAuthor);
router.get('/', getAuthors);
router.get('/:id', getAuthorById);
router.put('/:id', validate(authorSchema), updateAuthor);
router.delete('/:id', deleteAuthor);

module.exports = router;
