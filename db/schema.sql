CREATE DATABASE efeigloddhvj62al;

USE efeigloddhvj62al;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    munched BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);