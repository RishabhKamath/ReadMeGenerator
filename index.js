// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log('README generated successfully!');
  });}

// TODO: Create a function to initialize app
function init() {
    inquirer
      .prompt(questions)
      .then((answers) => {
        let data = `# ${answers.title}\n\n`;
        data += `## Description\n${answers.description}\n\n`;
        data += `## Installation\n${answers.installation}\n\n`;
        data += `## Usage\n${answers.usage}\n\n`;
        data += `## License\n${answers.license}\n\n`;
        data += `## Contributing\n${answers.contributing}\n\n`;
        data += `## Tests\n${answers.tests}\n\n`;
        data += `## Contact\nGitHub: ${answers.github}\nEmail: ${answers.email}\n`;
  
        writeToFile("README.md", data);
      });
  }
  

// Function call to initialize app
init();




