const mysql = require("mysql");
const inquirer = require('inquirer');
const views = require(".CRUD/views");
const creates = require(".CRUD/creates");
const updates = require(".CRUD/updates");
const deletes = require(".CRUD/deletes");

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

function main(){
    inquirer.prompt([
        {
            type: "list",
            name: "list",
            message: "What would you like to do?",
            choices: ["View Everything","View an Employee","View a Role", "View a Department","Add an Employee", "Add a Role", "Add a Department","Update an Employee", "Update a Role", "Update a Department","End"]
        }
    ]).then(answers => {
        if (answers.list === "View") {
            viewAllEmployees();
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
        else if (answers.list === "Update an Employee"){
            updateEmployee();
        }
        else if (answers.list === "Update a Role"){
            updateRole();
        }
        else if (answers.list === "Update a Department"){
            updateDepartment();
        }
        else if(answers.list === "Delete"){
            deleteEmployee();
        }
        else if(answers.list === "Search"){
            searchEmployee();
        }
        else if (answers.list === "End") {
            connection.end();
        }
    })
}





