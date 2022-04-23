// required modules
const Employee = require("./Employee");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const inquirer = require("inquirer");
const fs = require("fs");

class App {
  constructor() {
    this.employees = [];
    this.employeePrompt = [
      {
        type: "list",
        message: "What is your role?",
        name: "role",
        choices: ["Manager", "Engineer", "Intern", "Exit"],
      },
      {
        type: "input",
        message: ({ role }) =>
          `Creating a new ${role}. What is the ${role}'s name?`,
        name: "name",
        when: ({ role }) => role != "Exit",
        validate: (name) => {
          if (name) {
            return true;
          } else {
            console.log("Please enter a name.");
            return false;
          }
        },
      },
      {
        type: "input",
        message: ({ role }) => `What is the ${role}'s Employee ID?`,
        name: "id",
        when: ({ role }) => role != "Exit",
        validate: (id) => {
          if (id) {
            return true;
          } else {
            console.log("Please enter an Employee ID.");
            return false;
          }
        },
      },
      {
        type: "input",
        message: ({ role }) => `What is the ${role}'s email?`,
        name: "email",
        when: ({ role }) => role != "Exit",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Please enter an email address.");
            return false;
          }
        },
      },
      {
        when: ({ role }) => role === "Manager",
        type: "input",
        message: ({ role }) => `What is the ${role}'s office number?`,
        name: "officeNumber",
        validate: function (value) {
          return value.match(/^\w+$/) ? true : "Invalid office number";
        },
      },
      {
        when: ({ role }) => role === "Engineer",
        type: "input",
        message: ({ role }) => `What is the ${role}'s github?`,
        name: "github",
        validate: (github) => {
          if (github) {
            return true;
          } else {
            console.log("Please enter a github username.");
            return false;
          }
        },
      },
      {
        when: ({ role }) => role === "Intern",
        type: "input",
        message: ({ role }) => `What is the ${role}'s school?`,
        name: "school",
        validate: (school) => {
          if (school) {
            return true;
          } else {
            console.log("Please enter a school.");
            return false;
          }
        },
      },
    ];
  }

  // start team profile generator
  start() {
    this.nextEmployee();
  }

  // inquirer prompts user to select a role and fill out corresponding questions. If exit is chosen, the HTML gets generated.
  nextEmployee() {
    inquirer.prompt(this.employeePrompt).then((data) => {
      switch (data.role) {
        case "Exit":
          this.renderHTML();
          console.log("Team Profile Generated");
          break;
        case "Manager":
          this.employees.push(
            new Manager(data.name, data.id, data.email, data.officeNumber)
          );
          this.nextEmployee();
          break;
        case "Engineer":
          this.employees.push(
            new Engineer(data.name, data.id, data.email, data.github)
          );
          this.nextEmployee();
          break;
        case "Intern":
          this.employees.push(
            new Intern(data.name, data.id, data.email, data.school)
          );
          this.nextEmployee();
          break;
      }
    });
  }

  renderHTML() {}
}

module.exports = App;
