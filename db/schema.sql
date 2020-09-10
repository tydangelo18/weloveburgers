CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    munched BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);