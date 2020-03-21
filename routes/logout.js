var express = require('express');
var router = express.Router();

/* GET Login page. */
router.get('/', function(req, res, next) {
  res.render('logout',{
    title: 'Logout'
  });
});

/* POST Login page. */
router.post('/', function(req, res, next){
  res.render('logout', {
    title: "結果！"
  });

});

module.exports = router;
