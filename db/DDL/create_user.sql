CREATE TABLE user
(
    id INT AUTO_INCREMENT,
    email VARCHAR(50) NOT NULL,
    pw VARCHAR(128) NOT NULL,
    first_name NVARCHAR(30) NOT NULL,
    last_name NVARCHAR(30) NOT NULL,
    nickname NVARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);
