var express = require('express');
const bcrypt = require('bcrypt');
var router = express.Router();

var db = require('mysql');

/* ログイン画面からPOSTで遷移 */
router.post('/', function(req, res, next) {
  
  // UserNameの入力を確認し、セッションに格納
  if(req.body.userName) {

    req.session.userName = req.body.userName;
    
    const saltRounds = 10;
    const reqPassword = req.body.password;
    var salt = bcrypt.genSaltSync(saltRounds);
    var hash = bcrypt.hashSync(reqPassword, salt);
    console.log(salt, hash);

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
        console.log( rows.count );
        req.flash('failure', 'ログイン失敗、ユーザー名またはパスワードが誤りです。\n');
        res.redirect('/login');
      } else {
        var data = rows[0].pw;
        var result = bcrypt.compareSync(data, hash);
        console.log(result);
        if(!result) {
            console.log(data);
            console.log(hash);
            req.flash('failure', 'ログイン失敗、ユーザー名またはパスワードが誤りです。\n');
            res.redirect('/login');
        } else {
            res.render('mypage', { title: 'マイページ', userName: rows[0].nickname });
        }
      }
    });

  } else {
    req.flash('failure', 'ユーザー名を入力して下さい。');
    res.redirect('/login');
  }

});

module.exports = router;
