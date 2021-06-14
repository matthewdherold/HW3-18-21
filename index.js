const inquirer = require('inquirer');
const { sqlQuery , init } = require('./sqlQuery');

mainMenu = () => {
    inquirer
    .prompt({
      name: 'action',
      type: 'list',
      message: 'What would you like to do?',
      choices: [
        'Add a department, role, or employee',
        'View departments, roles, employees',
        'Update employee roles',
        'Quit application'
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
            sqlQuery('updateEmployee');
            break;
        case 'Quit application':
            process.exit();

        default:
            console.log('invalid response:', choice);
            break;
    };
});
};

const addMenu = () => {
    inquirer
    .prompt({
      name: 'action',
      type: 'list',
      message: 'What type of data would you like to add?',
      choices: [
          'Add a department',
          'Add a role',
          'Add an employee'
        ]
    }).then((choice) => {
        switch (choice.action) {
            case 'Add a department':
                sqlQuery('addDepartment');
                break;
            case 'Add a role':
                sqlQuery('addRole');
                break;
            case 'Add an employee':
                sqlQuery('addEmployee');
                break;

            default:
                console.log('invalid response:', choice);
                break;
        }
    })
}

const viewMenu = () => {
    inquirer
    .prompt({
      name: 'action',
      type: 'list',
      message: 'What data would you like to view?',
      choices: [
        'View departments',
        'View roles',
        'View employees'
      ]
    }).then((choice) => {
        switch (choice.action) {
            case 'View departments':
                sqlQuery('viewDepartments');
                break;
            case 'View roles':
                sqlQuery('viewRoles');
                break;
            case 'View employees':
                sqlQuery('viewEmployees');
                break;
        
            default:
                console.log('invalid response:', choice);
                break;
        }
    })
}

init();