DROP DATABASE IF EXISTS employee_trackerdb;

CREATE DATABASE employee_trackerdb;

USE employee_trackerdb;

CREATE TABLE department (
id INT AUTO_INCREMENT PRIMARY KEY,
department_name VARCHAR(30)
);

CREATE TABLE role(
id INT AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(30),
salary DECIMAL,
department_id INT,
FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee(
id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT,
manager_id INT,
FOREIGN KEY (role_id) REFERENCES role(id),
FOREIGN KEY (manager_id) REFERENCES employee(id)
);

INSERT INTO employee (first_name, last_name)
VALUES ("Sean", "Kempf"), ("Gillian", "Page"), ("Ahren", "Velasco");

INSERT INTO role (title, salary)
VALUES ("Software Engineer", 120000), ("Sales Person", 100000), ("Lead Engineer", 150000);

INSERT INTO department (department_name)
VALUES ("Engineering"), ("Sales"), ("Leadership");