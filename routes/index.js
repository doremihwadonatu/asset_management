var express = require('express');
var router = express.Router();

/* GET Login page. */
router.get('/', function(req, res, next) {
  res.redirect('/login');
});

/* POST Login page. */
router.post('/', function(req, res, next){
});

module.exports = router;
