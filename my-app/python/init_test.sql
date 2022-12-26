DROP DATABASE IF EXISTS authentication_system;

CREATE DATABASE authentication_system;

use authentication_system;

CREATE TABLE
    users(
        id int NOT NULL AUTO_INCREMENT,
        mail CHAR(50) NOT NULL,
        password CHAR(50) NOT NULL,
        token text NOT NULL,
        PRIMARY KEY (id)
    );