const fs = require('fs'); // filesystem init
const inq = require('inquirer'); // inquirer init
const util = require('./utils/generateMarkdown'); // following the initial code logic here


// * an array of questions for user input
let data = [
    {
        question: "What is your project title?",
        markdown: "markdown0"
    },
    {
        question: "How would you describe your project?",
        markdown: "markdown1"
    },
    {
        question: "Please provide write down your installation instructions:",
        markdown: "markdown2"
    }
];

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
            message: data[0].question,
            name: data[0].markdown,
        },
        {
            type: 'input',
            message: data[1].question,
            name: data[1].markdown,
        },
        {
            type: 'input',
            message: data[2].question,
            name: data[2].markdown,
        }
    ])
        .then((response) => {
                data[0].markdown = response.markdown0;
                data[1].markdown = response.markdown1;
                data[2].markdown = response.markdown2;
                let dataWrite = "";
                for(let i = 0; i<data.length; i++) { dataWrite += "\n" + data[i].markdown;} // get all the user inputs as one line
                fs.writeFile(fileName, dataWrite, error => //write to the file
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
