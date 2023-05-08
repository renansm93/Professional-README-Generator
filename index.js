// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./Develop/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What's the name of your project?",
    },

    {
        type: "input",
        name: "description",
        message: "Provide a brief drscription of your project:",
    },

    {
        type: "input",
        name: "installation",
        message: "Please enter installation instructions of your project:",
    },

    {
        type: "input",
        name: "usage",
        message: "Please enter usage information of your project:",
    },

    {
        type: "input",
        name: "contributionGuideLines",
        message: "Please enter contribution guidelines of your project:",
    },

    {
        type: "input",
        name: "testing",
        message: "Please enter test instructions of your project:",
    },

    {
        type: "list",
        name: "license",
        message: "Please select a license for your project:",
        choices: ["MIT", "ISC", "Apache", "GPL", "BSD", "None"],
    },

    {
        type: "input",
        name: "username",
        message: "Please enter your github username:",
    },

    {
        type: "input",
        name: "emailAddress",
        message: "Please enter your email address:",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Thanks! Your README file has been generated.");
    });
}
;

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (response) {
        console.log(response);
        writeToFile(`${response.title}.md`, response);
    });
}

// Function call to initialize app
init();
