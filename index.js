// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
//Imports
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

console.log("Welcome to the team generator!");
console.log("Use 'npm run reset' to reset the dist/folder");

console.log("Please build your team");

// Create an array of questions for user input
const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the team manager's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the team manager's id?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the team manager's email?",
  },
  {
    type: "input",
    name: "officenumber",
    message: "What is the team manager's office number?",
  },
];

const roleQuestion = [
  {
    type: "list",
    name: "role",
    message: "Which type of team member would you like to add?",
    choices: [
      "Engineer",
      "Intern",
      "I don't want to add any more team members",
    ],
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is your engineer's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is your engineer's id?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your engineer's email?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your engineer's GitHub username?",
  },
];

const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is your intern's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is your intern's id?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your intern's email?",
  },
  {
    type: "input",
    name: "school",
    message: "What is your intern's school?",
  },
];
let employeeArr = [];
// Create a function to initialize app
async function init() {
  const managerAnswers = await inquirer.prompt(managerQuestions);

  const managerObj = new Manager(
    managerAnswers.name,
    managerAnswers.id,
    managerAnswers.email,
    managerAnswers.officenumber
  );
  employeeArr.push(managerObj);
  let nextRoleAnswer = await inquirer.prompt(roleQuestion);
  while (nextRoleAnswer.role == "Engineer" || nextRoleAnswer.role == "Intern") {
    if (nextRoleAnswer.role == "Engineer") {
      const engineerAnswers = await inquirer.prompt(engineerQuestions);

      const engineerObj = new Engineer(
        engineerAnswers.name,
        engineerAnswers.id,
        engineerAnswers.email,
        engineerAnswers.github
      );
      employeeArr.push(engineerObj);
    } else if (nextRoleAnswer.role == "Intern") {
      const internAnswers = await inquirer.prompt(internQuestions);

      const internObj = new Intern(
        internAnswers.name,
        internAnswers.id,
        internAnswers.email,
        internAnswers.school
      );
      employeeArr.push(internObj);
    }
    nextRoleAnswer = await inquirer.prompt(roleQuestion);
  }
  console.log(employeeArr);
}

// Function call to initialize app
init();
