const express = require('express');
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const app = express();
const inquirer = require('inquirer');
require("console.table");

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'password123',
    database: 'employees_db'
  }
);


db.connect(function (err) {
  if (err) throw err;
  mainPrompt();
})


// view all departments, view all roles, 
// view all employees, add a department, add a role, 
// add an employee, and update an employee role

function mainPrompt() {
  inquirer
    .prompt({
      name: "main",
      type: "list",
      message: "Pick an option",
      choices:
        [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
        ],
    })
    .then(function (choice) {
      switch (choice.main) {
        case "View all departments": viewDepartments();
          break;

        case "View all roles": viewRoles();
          break;

        case "View all employees": viewEmployees();
          break;

        case "Add a department": addDepartment();
          break;

        case "Add a role": addRole();
          break;

        case "Add an employee": addEmployee();
          break;

        case "Update an employee role": updateRole();
          break;
      }
    });
}

function viewDepartments() {

  db.query('SELECT * FROM department', (err, res) => {
   
    db.connect(function (err) {
      if (err) throw err;

    console.table(res);
    mainPrompt();
   }) });
}

function viewRoles() {

  db.query("SELECT * FROM roles", (err, res) => {
   
    db.connect(function (err) {
      if (err) throw err;

    console.table(res);
    mainPrompt();})
  });
}

function viewEmployees() {

  db.query("SELECT * FROM employee", (err, res) => {
    db.connect(function (err) {

      if (err) throw err;

    console.table(res);
    mainPrompt();})
  });
}
// // THEN I am prompted to enter the name of the department and that department is added to the database
function addDepartment() {
  inquirer
    .prompt(
      {
        name: "department_name",
        type: "input",
        message: "Name of department",
      })
    .then(function (addIt) {
  
      db.query("INSERT INTO department SET ?", 
      {
        department_name: addIt.addDepartment});

        db.query("SELECT * from department", (err, res) => {
      
        if (err) throw err;
        console.table(res);
        mainPrompt();
      });
    });}

// THEN I am prompted to enter the name, salary, and department 
// for the role and that role is added to the database
function addRole() {
  inquirer
    .prompt([
      {
        name: "role_name",
        type: "input",
        message: "Role name"
      },
      {
        name: "role_salary",
        type: "input",
        message: "Role salary",
      },
      {
        name: "role_department",
        type: "list",
        message: "Which department does this role belong to?",
        choices: [
          "Lead Salesman",
          "Underling Salesman",
          "Boss",
          "Mopper",
          "Sweeper",
          "Toilet Plunger",
          "Lead Marketer",
          "Junior Marketer",
          "Dog Net Handler",
          "Dog Tamer",
        ]
      },
    ])
    .then(function (addIt) {
      db.query("INSERT INTO roles SET ?", {
        title: addIt.addRoles
      });

      db.query("INSERT INTO roles SET ?", 
      {
        title: addIt.role_name, 
        salary: addIt.role_salary, 
        department_id: addIt.role_department, 
      }), db.query("SELECT * roles", (err, res) => {
      
        if (err) throw err;
        console.table(res);
        mainPrompt();
      });
    });
}
// THEN I am prompted to enter the employee’s first name, 
// last name, role, and manager, and that employee is added to the database
function addEmployee() {
  inquirer
    .prompt([
      {
        name: "employee_name",
        type: "input",
        message: "Employee's first name"
      },
      {
        name: "employee_last_name",
        type: "input",
        message: "Employee's last name"
      },
      {
        name: "employee_role",
        type: "input",
        message: "Employee's role"
      },
      {
        name: "employee_manager",
        type: "input",
        message: "Employee's manager"
      },
    ])
    .then(function (addIt) {
      db.query("INSERT INTO employee SET ?", {
        name: addIt.addDepartment
      });

      db.query("INSERT INTO employee SET ?", 
      {
        first_name: addIt.employee_name, 
        last_name: addIt.employee_last_name, 
        role_id: addIt.employee_role, 
        manager_id: addIt.employee_manager
      }),
      db.query("SELECT * from employee", (err, res) => {
      
        if (err) throw err;
        console.table(res);
        mainPrompt();
      });
    });
}


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});