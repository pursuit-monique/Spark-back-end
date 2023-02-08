DROP DATABASE IF EXISTS spark_dev;

CREATE DATABASE spark_dev;
\c spark_dev;

CREATE TABLE users (
    id SERIAL UNIQUE PRIMARY KEY,
    name VARCHAR(30),
    about TEXT,
    profile TEXT,
    mood VARCHAR(30),
    theme VARCHAR(30),
    blocker_main TEXT,
    blockerlist TEXT
);

CREATE TABLE actions (
   id SERIAL UNIQUE PRIMARY KEY,
   user_id INT,
   goal_id INT,
   action TEXT,
   is_complete BOOLEAN 
);

CREATE TABLE goals (
   id SERIAL UNIQUE PRIMARY KEY,
   name VARCHAR(30),
   goal_info TEXT
);