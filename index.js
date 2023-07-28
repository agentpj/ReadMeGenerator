// this index.js if for the ReadMe Generator project
// this includes installing NodeJS Inquirer

// require the nodejs files
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// the filename to use is specified here
var filename = 'README.md';

// Ask user information to put in the README file
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your Project?  ',
            name: 'titleEl',
        },
        {
            type: 'input',
            message: 'What is your name? ',
            name: 'nameEl',
        },
        {
            type: 'input',
            message: 'Who is your Project License with? ',
            name: 'licenseEl',
        },
        
        {
            type: 'input',
            message: 'What is the description of this Project? ',
            name: 'descriptionEl',
        },
        {
            type: 'input',
            message: 'What are the installation instructions? ',
            name: 'instructionsEl',
        },
        {
            type: 'input',
            message: 'What is the ReadMe file used for? ',
            name: 'usageEl',
        },
        {
            type: 'input',
            message: 'List any contribution guidelines: ',
            name: 'contributionEl',
        },
        {
            type: 'input',
            message: 'What are some sample tests? ',
            name: 'testsEl',
        },
        {
            type: 'input',
            message: 'What is your email address? ',
            name: 'emailEl',
        },
        {
            type: 'input',
            message: 'What is the name of your GitHub repository? ',
            name: 'repoEl',
        },
    ])
    .then((data) =>
    
    //the actual call to write the user input to the README.md file
    {
        fs.writeFile(filename, generateMarkdown(data), (err) =>
          err ? console.log(err) : console.log('Success!')
        );
    }
    );

