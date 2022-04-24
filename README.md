# Team Profile Generator

Team Profile Generator is a Node.js command-line application that takes in information about employees and generates an HTML webpage that displays summaries for each person.

## Mock-Up

The following image shows the generated HTML’s appearance and functionality. The styling in the image is just an example, so feel free to add your own styles:

![HTML webpage titled “My Team” features five boxes listing employee names, titles, and other key info.](./Assets/10-object-oriented-programming-homework-demo.png)

## Getting Started

This Challenge will combine many of the skills you’ve learned over the first ten weeks of this course. To help you get started, we’ve provided some guidelines in addition to the User Story and Acceptance Criteria.

Your application should use [Jest](https://www.npmjs.com/package/jest) to run the unit tests and [Inquirer](https://www.npmjs.com/package/inquirer) to collect input from the user. The application will be invoked by using the following command:

```bash
node index.js
```

It is recommended that you start with a directory structure that looks like this:

```md
.
├── **tests**/ //jest tests
│ ├── Employee.test.js
│ ├── Engineer.test.js
│ ├── Intern.test.js
│ └── Manager.test.js
├── dist/ // rendered output (HTML) and CSS style sheet
├── lib/ // classes
├── src/ // template helper code
├── .gitignore // indicates which folders and files Git should ignore
├── index.js // runs the application
└── package.json
```

## Review

You are required to submit the following for review:

- A walkthrough video demonstrating the functionality of the application and passing tests.

- A sample HTML file generated using your application.

- The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.
