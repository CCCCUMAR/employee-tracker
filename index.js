const express = require('express');
// const path = require('path');
const table = require('console.table');
const inquirer = require('inquirer');
const app = express();
const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
 {
host: 'localhost',
// MySQL username,
user: 'root',
password: 'rootroot',
database: 'emTracker_db'
})


const promptTracker = () =>{
    return inquirer.prompt([
        {
            type: "list",
            name: "menu",
            message: "What would you like to do?",
            choices: ["View all Employees", "Add an Employee", "Update Employee Role", "View all Roles", "Add Role", "View all Departments", "Add Department", "exit" ]
    }])
   
    .then(userChoice => {
        switch(userChoice.menu){
            case "View all Employees":
                viewEmployees();
                break;
            case "Add an Employee":
                 addEmployee();
                break;
            case "Update Employee Role":
                updateEmployee();
                break;
            case "View all Roles":
                viewRoles();
                break;
            case "Add Role":
                 addRole();
                break;
            case "View all Departments":
                viewDepartments();
                break;
                case "Add Department":
                    addDepartments();
                   break;
               case "exit":
                   console.log("Exiting Application")
                   process.exit(0)
                  
                   
        }
    });


    };
// function for viewing list of employees
const viewEmployees = () => {
    db.query(
        "SELECT * FROM employee",
        function(err, results){
            console.table(results)
            promptTracker()
        }

    )
};

// function for viewing all the roles
const viewRoles = () => {
    db.query(
        "SELECT * FROM roles",
        function(err, results){
            console.table(results)
            promptTracker()
        }

    )
}

// function for viewing al departments
const viewDepartments = () => {
    db.query(
        "SELECT * FROM department",
        function(err, results){
            console.table(results)
            promptTracker()
        }

    )
}
promptTracker()
    




