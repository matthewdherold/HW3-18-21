const inquirer = require('inquirer');
const connection = require('./connection');
const cTable = require('console.table')

const sqlQuery = (request, data) => {
    let query = ''
    switch (request) {
        case 'addDepartment':
        inquirer
        .prompt({
            name: 'action',
            type: 'input',
            message: 'What is the name of the new department?',
        }).then((choice) => {
            query = `INSERT INTO department SET ?`;
            let newDep = {
                name: choice.action
            }
            connection.query(query, newDep, (err, res) => {
                if (err) throw err;
                else 
                console.log(res);
                mainMenu();
        })});
            break;
        case 'addRole':
            inquirer
            .prompt([
                {
                    name: 'title',
                    type: 'input',
                    message: 'What is the title of the new role?',
                },
                {
                    name: 'salary',
                    type: 'input',
                    message: 'What is the salary?'
                },
                {
                    name: 'department_id',
                    type: 'input',
                    message: 'What is the department ID?'
                }
        ]).then((choices) => {
                query = `INSERT INTO role SET ?`;
                let newRole = {
                    title: choices.title,
                    salary: choices.salary,
                    department_id: choices.department_id
                }
                connection.query(query, newRole, (err, res) => {
                    if (err) throw err;
                    else console.log(res)
                    mainMenu();
        })});
            break;
        case 'addEmployee':
            inquirer
            .prompt([
                {
                    name: 'fn',
                    type: 'input',
                    message: 'What is the first name of the new employee?',
                },
                {
                    name: 'ln',
                    type: 'input',
                    message: 'What is the their last name?'
                },
                {
                    name: 'role_id',
                    type: 'input',
                    message: 'What is their role ID?'
                },

        ]).then((choices) => {
            let newEmp = {
                first_name: choices.fn,
                last_name: choices.ln,
                role_id: choices.role_id,
                manager_id: null
            }
            inquirer
            .prompt({
                name: 'manager',
                type: 'confirm',
                message: 'Does this employee have a manager ID?'
            }).then((choice) => {
                console.log(choice)
                if (choice === true) {
                    inquirer
                    .prompt({
                        name: 'managerid',
                        type: 'confirm',
                        message: 'What is the manager ID?'
                    }).then((choice) => {
                    newEmp = {...manager_id = choice.managerid}
                    });
                };
                query = `INSERT INTO employee SET ?`;
                connection.query(query, newEmp, (err, res) => {
                    if (err) throw err;
                    else console.log(res)
                    mainMenu();
            });
        })});
            break;
        case 'viewDepartments':
        query = `SELECT * FROM department`;
        connection.query(query, (err, res) => {
        if (err) throw err;
        else console.table(res);
        mainMenu()});
            break;
        case 'viewRoles':
        query = `SELECT * FROM role`;
        connection.query(query, (err, res) => {
        if (err) throw err;
        else console.table(res);
        mainMenu()});
            break;
        case 'viewEmployees':
        query = `SELECT * FROM employee`;
        connection.query(query, (err, res) => {
        if (err) throw err;
        else console.table(res)
        mainMenu()});
            break;
        case 'updateEmployee':
        query = `SELECT CONCAT(first_name, " ", last_name) AS name FROM employee`;
        connection.query(query, (err, res) => {
        if (err) throw err;
        else 
        inquirer
        .prompt({
            name: 'action',
            type: 'list',
            message: 'Which employee would you like to update?',
            choices: res
        }).then(choice => {
            let selection = choice.action.split(' ');
            let fn = selection[0];
            let ln = selection[1];
            inquirer
            .prompt({
                name: 'action',
                type: 'input',
                message: 'What is the new role id?',
        }).then((choice) => {
            query = 'UPDATE employee SET ? WHERE (? AND ?)'
            connection.query(query, 
            [
                {
                    role_id: choice.action
                },
                {
                    first_name: fn
                },
                {
                    last_name: ln
                },
            ],
            (err, res) => {
              if (err) throw err
              else console.log(res)
              mainMenu();
            }
        );
        });
    });
});
            break;
    
        default:
            console.log(request, data)
            mainMenu();
            break;
    }
}

const init = () => {
    connection.connect((err) => {
        if (err) {
            console.log(err);
        } else {
            mainMenu();
        }
    });
}

module.exports = { sqlQuery , init }