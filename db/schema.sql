DROP DATABASE IF EXISTS spark_dev;

CREATE DATABASE spark_dev;
\c spark_dev;

CREATE TABLE users (
    id SERIAL UNIQUE PRIMARY KEY,
    name VARCHAR(30),
    about VARCHAR(255),
    profile VARCHAR(255),
    mood VARCHAR(30),
    theme VARCHAR(30),
    blocker_main VARCHAR(255),
    blockerlist VARCHAR(255)
);

CREATE TABLE tasks (
   id SERIAL UNIQUE PRIMARY KEY,
   user_id INT,
   goal_id INT,
   task VARCHAR(255),
   is_complete BOOLEAN 
);

CREATE TABLE goals (
   id SERIAL UNIQUE PRIMARY KEY,
   name VARCHAR(30),
   goal_info VARCHAR(255)
);