var express = require('express');
var router = express.Router();

/* GET test page. */
router.get('/test/', function(req, res, next) {
  res.render('test', { title: 'test' });
});

/* POST test page. */
router.post('', function(req, res, next) {

  var username = req.body.username;

  res.render('test', {
    title: "結果！",
    username: username,
  });

});

module.exports = router;
