const fs = require('fs'); // filesystem init
const inq = require('inquirer'); // inquirer init
const util = require('./utils/generateMarkdown'); // following the initial code logic here


// * an array of questions for user input
let data = 
    {
        title: "",
        description: "",
        installation: "",
        usage: "",
        license: "",
        contributing: "",
        tests: "",
        githubname: "",
        email: "",
    };


// * a function to write to README file
function writeToFile(fileName, data) {
    
    fs.readFile(fileName, function (error) { // attempt to read the file to check if it exists
        if (error || (process.argv[2] === "-D")) { // if error or -D param - proceed to write/rewrite
            userInterview (data, fileName);
        } else
        { // no error - the file exists
        console.log(`Error: ${fileName} exists at path: ${process.argv[1].substring(0,process.argv[1].lastIndexOf("/")+1)}. \n Re-run with -D to overwrite.`);
        return;
        } }
        );
            
   

}

function userInterview (data, fileName) { // interview the user and generate the file content
    
    inq.prompt([
        {
            type: 'input',
            message: "Project title:",
            name: "title",
        },
        {
            type: 'input',
            message: "Project description:",
            name: "description",
        },
        {
            type: 'input',
            message: "Installation instructions:",
            name: "installation",
        },
        {
            type: 'input',
            message: "Usage instructions:",
            name: "usage",
        },
        {
            type: 'list',
            message: "Please select the license:",
            choices: ["MIT", "GNU GPL v3", "Mozilla", "Apache", "Boost", "Unlicense", "None"],
            name: "license",
        },
        {
            type: 'input',
            message: "List all contributors:",
            name: "contributing",
        },
        {
            type: 'input',
            message: "Describe tests:",
            name: "tests",
        },
        {
            type: 'input',
            message: "Your GitHub name:",
            name: "githubname",
        },
        {
            type: 'input',
            message: "Your e-mail:",
            name: "email",
        }
    ])
        .then((response) => {
                fs.writeFile(fileName, util.generateMarkdown(response), error => //write to the file
                error ? console.error(error) :
                console.log(`Success: created file: ${fileName} \n at ${process.argv[1].substring(0,process.argv[1].lastIndexOf("/")+1)}`)
                );
        });
}


// * a function to initialize app
function init(data) {
    
    writeToFile('README1.md', data);

}

// Function call to initialize app

init(data);
