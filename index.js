// this index.js if for the ReadMe Generator project
// this includes installing NodeJS Inquirer

// require the nodejs files
const inquirer = require('inquirer');
const fs = require('fs');

// the filename to use is specified here
var filename = 'README.md';

// Write this information from the user to the README.md file

function writeToFile(filename, data) {
    var lineitem = 'TITLE: ' + data.titleEl + '\n\n'
    fs.writeFile(filename, lineitem, (err) =>
        err ? console.log(err) : console.log('Success!')
    );

    lineitem = 'AUTHOR: ' + data.nameEl + '\n\n'
    fs.appendFile(filename, lineitem, (err) =>
        err ? console.log(err) : console.log('Success!')
    );

    lineitem = 'LICENSE: ' + data.licenseEl + " Copyright (c) 2023 " + data.nameEl + '\n\n'
    fs.appendFile(filename, lineitem, (err) =>
        err ? console.log(err) : console.log('Success!')
    );

    lineitem = 'DESCRIPTION: ' + data.descriptionEl + '\n\n'
    fs.appendFile(filename, lineitem, (err) =>
        err ? console.log(err) : console.log('Success!')
    );

    lineitem = 'INSTRUCTIONS: ' + data.instructionsEl + '\n\n'
    fs.appendFile(filename, lineitem, (err) =>
        err ? console.log(err) : console.log('Success!')
    );

    lineitem = 'USAGE: ' + data.usageEl + '\n\n'
    fs.appendFile(filename, lineitem, (err) =>
        err ? console.log(err) : console.log('Success!')
    );

    lineitem = 'CONTRIBUTIONS: ' + data.contributionEl + '\n\n'
    fs.appendFile(filename, lineitem, (err) =>
        err ? console.log(err) : console.log('Success!')
    );

    lineitem = 'TESTS: ' + data.testsEl + '\n\n'
    fs.appendFile(filename, lineitem, (err) =>
        err ? console.log(err) : console.log('Success!')
    );

    lineitem = 'If you have any questions, please contact ' + data.nameEl + ' at ' + data.emailEl + '\n\n'
    fs.appendFile(filename, lineitem, (err) =>
        err ? console.log(err) : console.log('Success!')
    );

    lineitem = 'GITHUB REPOSITORY: ' + data.repoEl + '\n\n'
    fs.appendFile(filename, lineitem, (err) =>
        err ? console.log(err) : console.log('Success!')
    );

    // github link https://github.com/agentpj/ReadMeGenerator
    lineitem = 'https://' + data.repoEl + '\n\n'
    fs.appendFile(filename, lineitem, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
};

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
    .then((data) => writeToFile(filename, data));

