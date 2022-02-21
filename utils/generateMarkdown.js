// Returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
  return license === 'None'
    ? ''
    : `![shield.io](https://img.shields.io/badge/license-${license}-green)`;
}

// Returns the license link
// If there is no license, returns an empty string
function renderLicenseLink(license) {
  let licenseLink;
  switch (license) {
    case 'MIT':
      licenseLink = 'https://choosealicense.com/licenses/mit/';
    case 'AGPL v3':
      licenseLink = 'https://choosealicense.com/licenses/agpl-3.0/';
    case 'GPL v3':
      licenseLink = 'https://choosealicense.com/licenses/gpl-3.0/';
    case 'LBPL v3':
      licenseLink = 'https://choosealicense.com/licenses/lgpl-3.0/';
    case 'MPL v2':
      licenseLink = 'https://choosealicense.com/licenses/mpl-2.0/';
    case 'Apache 2.0':
      licenseLink = 'https://choosealicense.com/licenses/apache-2.0/';
    case 'BSL':
      licenseLink = 'https://choosealicense.com/licenses/bsl-1.0/';
    case 'Unlicense':
      licenseLink = 'https://choosealicense.com/licenses/unlicense/';
      break;
    default:
      licenseLink = '';
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license === 'None'
    ? ''
    : `
## License
  
This project is covered under the [${license} License](${renderLicenseLink(
        license
      )}). For more information regarding this license, please visit [${renderLicenseLink(
        license
      )}](${renderLicenseLink(license)})
      `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
${
  data.license === 'None'
    ? `- [Questions](#questions)`
    : `- [License](#license)
- [Questions](#questions)`
}

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}
${renderLicenseSection(data.license)}
## Questions

[My GitHub Profile](https://github.com/${data.githubUser})

Please email ${data.email} with any questions or feedback. Thank you!
`;
}

module.exports = generateMarkdown;
