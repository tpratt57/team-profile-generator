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

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if(nameInput){
                    return true;
                }
                else{
                    console.log('Please enter your name!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'What is your employee id? (Required)',
            validate: employeeIdInput => {
                if(employeeIdInput){
                    return true;
                }
                else{
                    console.log('Please enter your employee id!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email? (Required)',
            validate: emailInput => {
                if(emailInput){
                    return true;
                }
                else{
                    console.log('Please enter your email!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'roomNumber',
            message: 'What is your Room Number? (Required)',
            validate: roomNumberInput => {
                if(roomNumberInput){
                    return true;
                }
                else{
                    console.log('Please enter your roomNumber!')
                    return false;
                }
            }
        },
    ])
        
}

promptManager();