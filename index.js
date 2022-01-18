const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'The title of your project is: ?',
        },

        {
            type: 'input',
            name: 'details',
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
            choices: ['MIT License', "APACHE 2.0", "None"]
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
        fs.writeFile('response.txt', JSON.stringify(response), (err) =>
            err ? console.error(err) : console.log('Success!'))
    );