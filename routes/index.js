var express = require('express');
var router = express.Router();
const {userLogin, register} = require('../controllers/user')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register', register)
router.post('/login', userLogin)

module.exports = router;