var express = require('express');
var router = express.Router();

var db = require('mysql');

/* ログイン画面からPOSTで遷移 */
router.post('/', function(req, res, next) {
  
  // UserNameの入力を確認し、セッションに格納
  if(req.body.userName) {

    req.session.userName = req.body.userName;

    // DB設定
    const con = db.createConnection({
      host: 'localhost',
      user: 'rh',
      password: 'emc2',
      database: 'asset_management'
    });

    con.query('SELECT * FROM user WHERE email = \'' + req.session.userName + '\';', function(err, rows){
      if(err) {
        console.log(err);
        throw err;
        next();
      }
      if(rows.length != 1){
        console.log( err );
        req.flash('failure', 'ログイン失敗、ユーザー名またはパスワードが誤りです。\n');
        res.redirect('/login');
      } else {
        res.render('mypage', { title: 'マイページ', userName: rows[0].nickname });
      }
    });

  } else {
    req.flash('failure', 'ユーザー名を入力して下さい。');
    res.redirect('/login');
  }

});

module.exports = router;
