// Required packages
const inquirer = require('inquirer');
const gm = require('./utils/generateMarkdown');

const mockData = {
  title: 'Project',
  description: 'project desc',
  installation: 'install it',
  usage: 'click things',
  license: 'MIT',
  contributing: 'guidelines',
  tests: 'do testing',
  githubUser: 'brookescodestuff',
  email: 'email@email.com',
};

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

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  // inquirer.prompt(questions).then((answers) => gm(answers));
  console.log(gm(mockData));
}

// Function call to initialize app
init();
