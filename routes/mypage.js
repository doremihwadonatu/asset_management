var express = require('express');
var router = express.Router();

/* ログイン画面からPOSTで遷移 */
router.post('/', function(req, res, next) {
  
  // UserNameの入力を確認し、セッションに格納
  if(req.body.userName){
    req.session.userName = req.body.userName;
    res.render('mypage', { title: 'マイページ', userName: req.session.userName });
  } else {
    req.flash('failure', 'ログイン失敗、ユーザー名またはパスワードが誤りです。');
    res.redirect('/login');
  }

});

module.exports = router;
