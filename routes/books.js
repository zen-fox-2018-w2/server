var express = require('express');
var router = express.Router();
var upload = require('../helpers/upload')
var bookController = require('../controllers/book')

router.post('/', upload.multer.single('file'),
    upload.sendUploadToGCS, bookController.add_book)

module.exports = router;