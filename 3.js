const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a brief description of your project:'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide instructions on how to install your project:'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide information on how to use your project:'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'GPLv3', 'Apache', 'None']
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide information on how to contribute to your project:'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide instructions on how to run tests for your project:'
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address for contact:'
  }
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log('README generated successfully!');
  });
}

function init() {
  inquirer.prompt(questions).then((answers) => {
    let readme = `# ${answers.title}`;
    readme += `\n\n## Description`;
    readme += `\n${answers.description}`;
    readme += `\n\n## Table of Contents`;
    readme += `\n- [Installation](#installation)