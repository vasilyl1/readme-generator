const fs = require('fs'); // filesystem init
const inq = require('inquirer'); // inquirer init

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    inq
        .prompt([
            {
                type: 'input',
                message: 'What is your user name?',
                name: 'username',
            },
            {
                type: 'password',
                message: 'What is your password?',
                name: 'password',
            },
            {
                type: 'password',
                message: 'Re-enter password to confirm:',
                name: 'confirm',
            },
        ])
        .then((response) =>
            response.confirm === response.password
                ? console.log('Success!')
                : console.log('You forgot your password already?!')
        );

    fs.readFile('data.csv', 'utf8', (error, data) =>
        error ? console.error(error) : console.log(data)
    );
}

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
