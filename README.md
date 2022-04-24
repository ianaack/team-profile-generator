# Team Profile Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

Team Profile Generator is a Node.js command-line application that takes in information about employees and generates an HTML webpage that displays summaries for each person.

## Table of Contents

- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contribution](#Contribution)
- [Tests](#Tests)
- [Questions](#Questions)
- [License](#License)

##

## Installation

To install this application clone the repository to your local machine either by an HTTP or an SSH link.

```bash
git clone
```

Once you have the repository cloned to your local machine, navigate to the root folder of the repository in your terminal and copy to install the following dependancies:
Jest:

```bash
npm i --save-dev jest
```

and Inquirer:

```bash
npm i inquirer
```

This will install all necessary dependancies in order for the application to run.

## Usage

To use this application, navigate to the root folder of this application in the terminal and enter the following:

```bash
node index.js
```

You will then be asked a series of questions that, once complete, will generate a team profile webpage.

Below are screenshots of what your terminal output should look like, as well as an example HTML page generated using the terminal:

<img width="473" alt="terminalOutput" src="https://user-images.githubusercontent.com/47282257/164955354-c5b44b4d-0be9-4a4c-99a5-992830f1687f.png">
<img width="788" alt="generatedHTML" src="https://user-images.githubusercontent.com/47282257/164955350-9e15134e-bea1-409a-8190-88a1f192797c.png">

This is a link to an example terminal input:
https://drive.google.com/file/d/1i0bjRiP14D_cThbbQWsUDLweS40CY5D0/view?usp=sharing

This is a link to an example of the generated HTML:
https://drive.google.com/file/d/1PWhhVWaJsUZtg29s7MWDAqzhgM950ZWH/view?usp=sharing

## Tests

Testing for this application has been implemented using the node package "Jest".
Use the following command to test whether all files are working correctly:

```bash
npm run test
```

## Questions

To view other applications I have built:
[Github](#https://github.com/ianaack)

If you have any questions about this application please reach out to me directly via email: ianaack@gmail.com

## License

This project is covered under the MIT License.
