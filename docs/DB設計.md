# DB設計

## テーブル一覧

| No.  | テーブル論理名 |  テーブル物理名 |用途 |
| :---: | :---: | :---: | :--- |
| 001 | ユーザ | user | ユーザ情報を格納 |
| 002 | 取引履歴 | transaction_history | 資産の取引履歴を格納 |


## テーブル詳細



### 001 ユーザ情報 

| フィールド物理名  | フィールド論理名 | データ型 | Null | Key | Default | Extra |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| id | ID | INT | NO | PRI | NULL | auto_increment |
| email | メールアドレス | VARCHAR(50) | NO |  | NULL |  |
| password | パスワード | VARCHAR(128) | NO |  | NULL |  |
| first_name | 名 | NVARCHAR(30) | NO |  | NULL |  |
| last_name | 姓 | NVARCHAR(30) | NO |  | NULL |  |
| nickname | ニックネーム | NVARCHAR(30) | NO |  | NULL |  |




