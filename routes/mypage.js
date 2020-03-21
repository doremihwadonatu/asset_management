var express = require('express');
var router = express.Router();

/* GET test page. */
router.get('/', function(req, res, next) {
  res.render('mypage', { title: 'test' });
});

/* POST test page. */
router.post('', function(req, res, next) {

  var username = req.body.username;

  res.render('mypage', {
    title: "結果！",
    username: username,
  });

});

/* POST test page. */
router.post('', function(req, res, next) {
  res.render('logout', {title: 'Logout'});
});

module.exports = router;
