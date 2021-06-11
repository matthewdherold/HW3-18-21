INSERT INTO department (name)
VALUES 
    ("Development"),
    ("Marketing"),
    ("Distribution"),
    ("Customer Service");

INSERT INTO role (title, salary, department_id)
VALUES
    ("Senior Developer", 200000, 1),
    ("Junior Developer", 100000, 1),
    ("Marketing Manager", 120000, 2),
    ("Market Analyst", 90000, 2),
    ("Distribution Manager", 170000, 3),
    ("General Sales", 80000, 3),
    ("Customer Service Manager", 90000, 4),
    ("Customer Service Specialist", 60000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ("Matthew", "Goat", 1, null),
    ("Tristyn", "Goat", 3, null),
    ("Mandy", "Barker", 5, null),
    ("Mean", "Boss", 7, null),
    ("Sarge", "Lackey", 2, 1),
    ("Holly", "Bimbo", 4, 2),
    ("Tom", "Boyo", 6, 3),
    ("Marvin", "Helpful", 8, 4);