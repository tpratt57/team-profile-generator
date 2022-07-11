const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager');
const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');
const generatePage = require('./src/template.js');
const path = require('path')
const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'index.html');
const teamMembers = [];

function runApp () {

    function createTeam () {
      inquirer.prompt([{
        type: "list",
        message: "What type of employee would you like to add to your team?",
        name: "addEmployeePrompt",
        choices: ["Manager", "Engineer", "Intern", "No more team members are needed."]
      }]).then(function (userInput) {
        switch(userInput.addEmployeePrompt) {
          case "Manager":
            addManager();
            break;
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
            break;
  
          default:
            htmlBuilder();
        }
      })
    }
  // OOP Functions
  
  function addManager() {
    inquirer.prompt ([
      
      {
        type: "input",
        name: "managerName",
        message: "What is the manager's name?"
      },
  
      {
        type: "input",
        name: "managerId",
        message: "What is the manager's employee ID number?"
      },
  
      {
        type: "input",
        name: "managerEmail",
        message: "What is the manager's email address?"
      },
  
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the manager's office number?"
      }
  
    ]).then(answers => {
      const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
      teamMembers.push(manager);
      createTeam();
    });
  
  }
  
  
  function addEngineer() {
      inquirer.prompt([
        
        {
          type: "input",
          name: "engineerName",
          message: "What is the engineer's name?"
        },
  
        {
          type: "input",
          name: "engineerId",
          message: "What is the engineer's employee ID number?" 
        },
  
        {
          type: "input",
          name: "engineerEmail",
          message: "What is the engineer's email address?"
        },
  
        {
          type: "input",
          name: "engineerGithub",
          message: "What is the engineer's GitHub username?"
        }
  
      ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        teamMembers.push(engineer);
        createTeam();
      });
  
    }
  
    function addIntern() {
      inquirer.prompt([
        
        {
          type: "input",
          name: "internName",
          message: "What is the intern's name?"
        },
  
        {
          type: "input",
          name: "internId",
          message: "What is the intern's employee ID number?" 
        },
  
        {
          type: "input",
          name: "internEmail",
          message: "What is the intern's email address?"
        },
  
        {
          type: "input",
          name: "internSchool",
          message: "What school does the intern attend?"
        }
  
      ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        teamMembers.push(intern);
        createTeam();
      });
  
    }
  
    // return to menu with option to add another team member create team
  
    // Would you like to add a team member?
    // Yes || No
    // If Yes --> Then select an employee role for your new team member: Manager, Engineer, Intern
    // If No --> Create Team
  
  
  function htmlBuilder () {
      console.log("Team created!")
  
      fs.writeFileSync(outputPath, generatePage(teamMembers), "UTF-8")
  
  }
  
  createTeam();
  
  }
  
  runApp();