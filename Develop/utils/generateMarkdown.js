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

  
  return `## ${renderLicenseBadge(data.license)}

  ## Title
  ${data.title}

  ## Description
  ${data.description}
  
  ## Table of Contents

  [Title](#title)
  [Description](#description)
  [Installation](#installation)
  [Usage](#usage)
  [License](#license)
  [Contributing](#contributing)
  [Tests](#tests)
  [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${data.renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}

  ## Questions

  ${data.githubname}
  https://github.com/${data.githubname}
  Additional questions - please e-mail to ${data.email}
  
  
`;
}

module.exports = {
  generateMarkdown,
  renderLicenseSection,
  renderLicenseLink,
  renderLicenseBadge
}