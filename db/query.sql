source schema.sql;


SELECT * FROM department;


SELECT
employee.id, 
employee.first_name, 
employee.last_name, 
roles.title, 
roles.salary, 
employee.manager_id
FROM employee
INNER JOIN roles ON roles.id = employee.roles_id
INNER JOIN department ON department.id = roles.department_id
ORDER BY employee.id;

SELECT
roles.id, roles.title, deparment.name, roles.salary
FROM roles 
JOIN department ON roles.department_id = department.id
ORDER BY roles.id;