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

  // inquirer prompts user to select a role and fill out corresponding questions. If exit is chosen, the HTML file is generated.
  nextEmployee() {
    inquirer.prompt(this.employeePrompt).then((data) => {
      switch (data.role) {
        case "Exit":
          this.startHTML();
          console.log("Your team has been built!");
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

  startHTML() {
    const html = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <!--Bootstrap-->
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous"
        />
        <!--Bootstrap Icons-->
        <!--mortarboard = Intern, person-rolodex = Manager, tools = Engineer-->
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"
        />
        <!--Custom CSS-->
        <link rel="stylesheet" href="../assets/css/style.css" />
        <title>Team Profile Generator</title>
      </head>
    
      <body>
        <div class="min-vw-100" id="team">
          <header
            class="d-flex flex-wrap justify-content-center w-100 bg-danger p-5 shadow"
          >
            <div class="display-4 text-white">My Team</div>
          </header>
        </div>
    
        <div class="container d-flex flex-wrap justify-content-between min-vw-100">
          <div class="row m-5" id="cards">`;
    fs.writeFile("./dist/index.html", html, function (err) {
      if (err) {
        console.log(err);
      }
    });
    this.renderCard();
  }

  // Once exit is chosen, the employee cards are generated.
  renderCard() {
    this.employees.forEach((employee) => {
      const name = employee.getName();
      const role = employee.getRole();
      const id = employee.getId();
      const email = employee.getEmail();
      let data = "";

      if (role === "Engineer") {
        const github = employee.getGithub();
        data = `<div class="card shadow alert-secondary m-3">
               <div class="card-header bg-primary text-white lead text-center font-weight-bold">
                   ${name}
                   </br>
                 <i class="bi-tools p-1 m-2 font-weight-light"> ${role}</i>
               </div>
               <div class="card-body">
                 <p class="bg-light border border-secondary m-1 p-1">ID: ${id}</p>
                 <address class="bg-light border border-secondary m-1 p-1">Email: <a href="mailto:${email}">${email}</a></address>
                 <address class="bg-light border border-secondary m-1 p-1">Github: <a href="https://github.com/${github}">github.com/${github}</p>
               </div>
             </div>`;
      } else if (role === "Intern") {
        const school = employee.getSchool();
        data = `<div class="card shadow alert-secondary m-3">
        <div class="card-header bg-primary text-white lead text-center font-weight-bold">
            ${name}
            </br>
          <i class="bi-mortarboard p-1 m-2 font-weight-light"> ${role}</i>
        </div>
        <div class="card-body">
          <p class="bg-light border border-secondary m-1 p-1">ID: ${id}</p>
          <address class="bg-light border border-secondary m-1 p-1">Email: <a href="mailto:${email}">${email}</a></address>
          <p class="bg-light border border-secondary m-1 p-1">School: ${school}</p>
        </div>
      </div>`;
      } else {
        const officeNumber = employee.getOfficeNumber();
        data = `<div class="card shadow alert-secondary m-3">
        <div class="card-header bg-primary text-white lead text-center font-weight-bold">
            ${name}
            </br>
          <i class="bi-person-rolodex p-1 m-2 font-weight-light"> ${role}</i>
        </div>
        <div class="card-body">
          <p class="bg-light border border-secondary m-1 p-1">ID: ${id}</p>
          <address class="bg-light border border-secondary m-1 p-1">Email: <a href="mailto:${email}">${email}</a></address>
          <p class="bg-light border border-secondary m-1 p-1">Office Number: ${officeNumber}</p>
        </div>
      </div>`;
      }
      fs.appendFile("./dist/index.html", data, function (err) {
        if (err) {
          console.log(err);
        }
      });
    });
    this.finishHTML();
  }

  finishHTML() {
    const html = `</div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/js/bootstrap.min.js"></script>
  </body>
  </html>`;

    fs.appendFile("./dist/index.html", html, function (err) {
      if (err) {
        console.log(err);
      }
    });
  }
}

module.exports = App;
