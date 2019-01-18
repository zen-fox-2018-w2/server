var express = require('express');
var router = express.Router();
var upload = require('../helpers/upload')
var { get_books, add_book, delete_ownCollection } = require('../controllers/book')

router.post('/', upload.multer.single('file'),
    upload.sendUploadToGCS, add_book)
router.get('/', get_books)
router.delete('/:id', delete_ownCollection)

module.exports = router;