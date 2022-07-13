var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/add-user', function(req, res, next) {
  res.render('add_user');
});

router.get('/update-user', function(req, res, next) {
  res.render('update_user');
});

module.exports = router;
