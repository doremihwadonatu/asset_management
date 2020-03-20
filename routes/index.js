var express = require('express');
var router = express.Router();

/* GET Login page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST Login page. */
router.post('/', function(req, res, next){
});

module.exports = router;
