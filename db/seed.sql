INSERT INTO department (department_name)

VALUES 
('Sales'),('Management'),('Custodial'),('Marketing'),('Dog Catchers');

INSERT INTO roles (title, salary, department_id)

VALUES
("Lead Salesman", 5024, 1),
("Underling Salesman", 114, 1),
("Boss", 2584459, 2),
("Mopper", 14, 3),
("Sweeper", 16, 3),
("Toilet Plunger", 489454, 3),
("Lead Marketer", 94854, 4),
("Junior Marketer", 64854, 4),
("Dog Net Handler", 9448, 5),
("Dog Tamer", 3001, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)

VALUES
("John", "Glenn", 1, 1),
("Bob", "Williams", 2, 1),
("Theodore", "Covington", 3, 1),
("Elliot", "Blastoise", 4, 2),
("Ashton", "Moocher", 5, 2),
("Godfrey", "Jones", 6, 2),
("Tanisha", "Gould", 7, 3),
("Kelston", "Domeli", 8, 3),
("Goosebury", "Kalamandrid", 9, 3);