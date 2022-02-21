// Required packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// An array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide any necessary installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose your license:',
    choices: [
      'MIT',
      'AGPL v3',
      'GPL v3',
      'LBPL v3',
      'MPL v2',
      'Apache 2.0',
      'BSL',
      'Unlicense',
      'None',
    ],
    default: 0,
  },
  {
    type: 'input',
    name: 'contributing',
    message:
      'Include guidelines on how other developers can contribute to the project:',
  },
  {
    type: 'input',
    name: 'tests',
    message: "Provide examples/information on how to run your project's tests:",
  },
  {
    type: 'input',
    name: 'githubUser',
    message: 'Please enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your email address:',
  },
];

// Write the README to file
function writeToFile(fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(`./dist/${fileName}`, data, (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'README file created!',
      });
    });
  });
}

// Function to initialize the app
function init() {
  return inquirer.prompt(questions);
}

// Function call to initialize app
init()
  .then((projectData) => {
    return generateMarkdown(projectData);
  })
  .then((markdown) => writeToFile('README.md', markdown));
