const mysql = require("mysql");
const inquirer = require('inquirer');

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
            choices: ["View","Update an Employee","Add an Employee","End"]
        }
    ]).then(answers => {
        if (answers.list === "View") {
            viewAllEmployees();
        }
        else if (answers.list === "Add an Employee") {
            addEmployee();
        }
        else if (answers.list === "Update an Employee"){
            updateEmployee();
        }
        else if(answers.list === "Delete"){
            deleteEmployee();
        }
        else if(answers.list === "Search"){
            searchArtist();
        }
        else if (answers.list === "End") {
            connection.end();
        }
    })
}



