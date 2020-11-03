const mysql = require("mysql");
const inquirer = require('inquirer');
const cTable = require('console.table');
// const views = require("./CRUD/views.js");
// const creates = require("./CRUD/creates,js");
// const updates = require("./CRUD/updates.js");
// const deletes = require("./CRUD/deletes.js");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "Br1gMa1n34#$",
    database: "employee_trackerdb"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    // connection.end();
    main();
});

function main() {
    inquirer.prompt([
        {
            type: "list",
            name: "list",
            message: "What would you like to do?",
            choices: ["View All Employees","View All Employees by Role", "View All Employees by Department", "View an Employee","Update an Employee", "Update an Employee Role", "Update an Employee Department", "Add an Employee", "Add a Role", "Add a Department", "End"]
        }
    ]).then(answers => {
        if (answers.list === "View All Employees") {
            viewAllEmployees();
        }
        else if (answers.list === "View All Employees by Department"){
            viewAllDepartments();
        }
        else if (answers.list === "View All Employees by Role"){
            viewAllRoles();
        }
        else if (answers.list === "Add an Employee") {
            addEmployee();
        }
        else if (answers.list === "Add a Role") {
            addRole();
        }
        else if (answers.list === "Add an a Department") {
            addDepartment();
        }
        else if (answers.list === "Update an Employee") {
            updateEmployee();
        }
        else if (answers.list === "Update an Employee Role") {
            updateRole();
        }
        else if (answers.list === "Update an Employee Department") {
            updateDepartment();
        }
        else if (answers.list === "Delete") {
            deleteEmployee();
        }
        else if (answers.list === "View an Employee") {
            searchEmployee();
        }
        else if (answers.list === "End") {
            connection.end();
        }
    })
}






function viewAllEmployees() {
    connection.query("SELECT * FROM employee", function (err, res) {
        if (err) throw err;
        console.table(res);
        main();
    })
};


function viewAllDepartments() {
    connection.query("SELECT employee.id, employee.first_name, employee.last_name, department.department_name FROM employee LEFT JOIN department ON department.id = employee.role_id ", function (err, res) {
        if (err) throw err;
        console.table(res);
        main();
    })
};

function viewAllRoles(){
    connection.query("SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary FROM employee LEFT JOIN role ON employee.role_id = role.id", function (err, res) {
        if (err) throw err;
        console.table(res);
        main();
    })
}