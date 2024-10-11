// Packages for this application
import fs from 'fs';
import inquirer from 'inquirer';
import path from 'path';
import generateMarkdown from './utils/generateMarkdown.js';

const questions = [
    // array of questions for the user input

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
        default: '',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'choose any licenses that may have been used for this project',
        choices: ["MIT", "ISC", "IPL 1.0"],
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
    {
        type: 'input',
        name: 'github',
        message: 'provide your github username',
    },
    {
        type: 'input',
        name: 'githublink',
        message: 'provide your github profile link',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address',
    },
    {
        type: 'input',
        name: 'fullName',
        message: 'Type in your full name',
    },
];

// Function to write a README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Function to initialize the app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating the Best README.md File for you ...");
        writeToFile(`generated.md`, generateMarkdown({ ...responses }));
    })
}

// Function call to initialize app
init();
