// Required packages
const inquirer = require('inquirer');
const gm = require('./utils/generateMarkdown');

const mockData = {
  title: 'Project',
  description: 'project desc',
  installation: 'install it',
  license: 'MIT License',
  contributing: 'guidelines',
  tests: 'do testing',
  githubUser: 'brookescodestuff',
  email: 'email@email.com',
};

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project? (required)',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a description of your project: (required)',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide any necessary installation instructions:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose your license:',
    choices: [
      'MIT License',
      'GNU AGPL',
      'GPU GPL',
      'GNU LBPL',
      'Mozilla Public License',
      'Apache License',
      'Boost Software License',
      'The Unlicense',
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
    message: 'Please enter your GitHub username: (required)',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your email address: (required)',
  },
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  // inquirer.prompt(questions).then((answers) => gm(answers));
  gm(mockData);
}

// Function call to initialize app
init();
