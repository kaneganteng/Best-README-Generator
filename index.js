// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
// TODO: Create an array of questions for user input
const questions = [
    // format for the questions
    // {
    //     type: '',
    //     name: '',
    //     message: '',
    // },
    {
        type: 'input',
        name: 'title',
        message: 'Please type the name of your project title',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please give a description to your project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'how to install this project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'provide instructions and examples for use. Include screenshots as needed.',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'list any collaborators if there is any with links to their github profile.',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'choose any licenses that may have been used for this project',
    },
    {
        type: 'input',
        name: 'badges',
        message: 'list badges if there are any',
    },
    {
        type: 'input',
        name: 'features',
        message: 'list some features available in this project',
    },
    {
        type: 'input',
        name: 'howToContribute',
        message: 'let other developers know how they can contribute if applicable',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'provide a tutorial on how this project is run',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(). fileName), data);
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
