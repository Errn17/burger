--Drop Database if it already exists
DROP DATABASE IF EXISTS burgers_db;

--Creating the database
CREATE DATABASE burgers_db;

--Using this database
USE burgers_db;

--Creating burgers table
CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    burger VARCHAR(100),
    devoured BOOLEAN
);

