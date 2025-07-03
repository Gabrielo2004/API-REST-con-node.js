// routes/bookRoutes.js
const express = require('express');
const router = express.Router();
const {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook
} = require('../controllers/bookController');
const validate = require('../middleware/validate');
const auth = require('../middleware/auth');
const { bookSchema } = require('../validators/bookValidator');

router.use(auth); // Proteger todas las rutas

router.post('/', validate(bookSchema), createBook);
router.get('/', getBooks);
router.get('/:id', getBookById);
router.put('/:id', validate(bookSchema), updateBook);
router.delete('/:id', deleteBook);

module.exports = router;
