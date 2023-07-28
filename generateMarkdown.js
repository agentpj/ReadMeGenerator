// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# TITLE: ${data.titleEl}

  ## AUTHOR: ${data.nameEl}

  ### LICENSE: ${data.licenseEl + " Copyright (c) 2023 " + data.nameEl}




### TABLE OF CONTENTS:
.  LICENSE
.  DESCRIPTION
.  INSTRUCTIONS
.  USAGE
.  CONTRIBUTIONS
.  TESTS
.  DEVELOPER CONTACT INFO
.  GITHUB REPOSITORY
.  GITHUB LINK

### DESCRIPTION: ${data.descriptionEl}


#### INSTRUCTIONS: ${data.instructionsEl}


#### USAGE: ${data.usageEl}


#### CONTRIBUTIONS: ${data.contributionEl}


##### TESTS: ${data.testsEl}


##### ${'If you have any questions, please contact ' + data.nameEl + ' at ' + data.emailEl}


# GITHUB REPOSITORY: ${data.repoEl}


# https://${data.repoEl}

`;
}
  
  module.exports = generateMarkdown;