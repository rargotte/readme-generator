const inquirer = require('inquirer');
const fs = require('fs');

function generateMarkdown(data) {
    if (data.licenses === "MIT License") {
        data.licenses = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    }
    if (data.licenses === "MOZILLA 2.0") {
        data.licenses = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    }
    if (data.licenses === "APACHE 2.0") {
        data.licenses = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    }


    return `
    
  # ${(data.title).toUpperCase()}

  ## Description
  ${data.description}

  ## Table of Contents
  1. [Installation](#Installation)
  2. [Usage](#Usage)
  3. [Contributions](#Contributions)
  4. [Test](#Test)
  5. [Github](#Github)
  6. [Email](#Email)
  7. [Licenses](#Licenses)

  # Installation
  ${data.installation}

  # Usage
  ${data.usage}

  # Contributions
  ${data.contributing}

  # Test
  ${data.test}

  # Github
  https://github.com/${data.github}

  # Email
  ${data.email}

  # Licenses
  ${data.licenses}
  
    `;
}

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'The title of your project is: ?',
        },

        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your project: ',

        },

        {
            type: 'input',
            name: 'installation',
            message: 'Installation Steps (please describe): ',
        },

        {
            type: 'input',
            name: 'usage',
            message: 'What problem is being solved by your application (usage): ?',
        },

        {
            type: 'input',
            name: 'contributing',
            message: 'Please provide guidelines for any contributor: ',
        },

        {
            type: 'input',
            name: 'test',
            message: 'Please provide some tests and how to run them: ',
        },

        {
            type: 'list',
            name: 'licenses',
            message: 'Please select the type of license that suits the best for your project: ',
            choices: ['MIT License', "MOZILLA 2.0", "APACHE 2.0", "None"]
        },

        {
            type: 'input',
            name: 'github',
            message: 'Please provide your github username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide your email address?',
        },






    ])
    .then((response) =>
        fs.writeFile('README_SAMPLE.md', generateMarkdown(response), (err) =>
            err ? console.error(err) : console.log('Success!'))
    );