var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('candies', { title: 'Search Results Candies' });
});

module.exports = router;
