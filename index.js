const mysql = require('mysql');
const inquirer = require('inquirer');
const connection = require('./connection');

mainMenu = () => {
    inquirer
    .prompt({
      name: 'action',
      type: 'list',
      message: 'What would you like to do?',
      choices: [
        'Add a department, role, or employee',
        'View departments, roles, employees',
        'Update employee roles'
      ]
}).then((choice) => {
    switch (choice.action) {
        case `Add a department, role, or employee`:
            addMenu();
            break;
        case 'View departments, roles, employees':
            viewMenu();
            break;
        case 'Update employee roles':
            updateMenu();
            break;

        default:
            console.log('invalid response:', choice);
            break;
    };
});

};

connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        mainMenu();
    }
});