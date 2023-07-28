// TODO: Include packages needed for this application


const inquirer = require('inquirer');
const fs = require('fs');
var filename = 'README.md';

function writeToFile(filename, data) {
        var lineitem = 'TITLE: ' + data.titleEl + '\n\n'
        fs.writeFile(filename, lineitem, (err) =>
            err ? console.log(err) : console.log('Success!')
        )
        lineitem = 'AUTHOR: ' + data.nameEl + '\n\n'
        fs.appendFile(filename, lineitem, (err) =>
            err ? console.log(err) : console.log('Success!')
        )

        lineitem = 'DESCRIPTION: ' + data.descriptionEl + '\n\n'
        fs.appendFile(filename, lineitem, (err) =>
            err ? console.log(err) : console.log('Success!')
        )
};


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
            name: 'contribution',
        },
        {
            type: 'input',
            message: 'What are some sample tests?',
            name: 'tests',
        },

    ])
    .then((data) => writeToFile(filename,data));

