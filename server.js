const express = require('express');
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const app = express();
const inquirer = require('inquirer');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'password123',
      database: 'employees_db'
    }
  );
  

db.connect(function (err){
  if(err) throw err;
  mainPrompt();
})


// view all departments, view all roles, 
// view all employees, add a department, add a role, 
// add an employee, and update an employee role

function mainPrompt(){
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
.then(function (choice){
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

viewDepartments()

const sql = `SELECT * FROM department`;
  
  db.query(sql, (err, res) => {
    if (err) {
      res.status(500).json({ error: err.message });
       mainPrompt();
    }});


// app.get('/api/employees', (req, res) => {

//   const sql = `SELECT * from employee`;
  
//   db.query(sql, (err, rows) => {
//     if (err) {
//       res.status(500).json({ error: err.message });
//        return;
//     }
//     res.json({
//       message: 'success',
//       data: rows
//     });
//   });
// });

// app.get('/api/roles', (req, res) => {

//   const sql = `SELECT * from roles`;
  
//   db.query(sql, (err, rows) => {
//     if (err) {
//       res.status(500).json({ error: err.message });
//        return;
//     }
//     res.json({
//       message: 'success',
//       data: rows
//     });
//   });
// });





  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    });