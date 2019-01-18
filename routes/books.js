var express = require('express');
var router = express.Router();
var upload = require('../helpers/upload')
var bookController = require('../controllers/book')

router.post('/', upload.multer.single('file'),
    upload.sendUploadToGCS, bookController.add_book)

router.get('/', bookController.get_books)

module.exports = router;