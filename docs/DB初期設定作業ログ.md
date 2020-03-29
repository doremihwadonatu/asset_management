# DB初期設定作業ログ

# mysqlの起動

    > sudo mysql.server start
    > sudo mysql -u root -p

# ユーザの設定

    # ユーザ追加、パスワードの設定
    mysql> CREATE USER [ユーザ名];
    mysql> SET PASSWORD FOR [ユーザ名]=[任意のパスワード];

    # 権限付与
    mysql> GRANT ALL ON *.* TO [ユーザ名];

    # rootはあぶないと思うので削除
    mysql> DROP USER root@localhost;

    