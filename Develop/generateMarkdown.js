// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "ISC":
        return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
    case "Apache":
        return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "GPL":
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "BSD":
        return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    case "None":
        return "";
    default:
        return "";
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
        return `This application is covered by the MIT license`;
    case "ISC":
      return `This application is covered by the ISC license`;
    case "Apache":
      return `This application is covered by the Apache license`;
    case "GPL":
      return `This application is covered by the GPL license`;
    case "BSD":
      return `This application is covered by the BSD license`;
  case "None":
      return "";
  default:
      return "";
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseBadge =renderLicenseBadge(data.license);
  let licenseDescription = renderLicenseLink(data.license);
  return `# ${data.title}
${licenseBadge}

${data.description}

## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Testing](#testing)
  * [Questions](#questions)



## Installation

${data.installation}



## Usage

${data.usage}




## License

${licenseDescription}




## Contributing

${data.contributionGuidelines}




## Testing

${data.testing}



## Questions

[Email me](mailto:${data.emailAddress})

[Review my other projects on GitHub.](https://www.github.com/${data.username})
`;
}

module.exports = generateMarkdown;
