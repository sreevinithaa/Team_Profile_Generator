var Employee = require("./lib/Employee");
var Engineer = require("./lib/Engineer");
var Intern = require("./lib/Intern");
var Manager = require("./lib/Manager");
var inquirer = require("inquirer");
var LoadHTML = require("./src/LoadHTML.js");
const fs = require("fs");
let memebers = [];
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "id",
      message: "What's your team member's Id?",
      validate(answer) {
        if (!answer) {
          return "Please, fill the team member id!";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "name",
      message: "What's your team member's name?",
      validate(answer) {
        if (!answer) {
          return "Please, fill the team member's name!";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "email",
      message: "What's your team member's email address?",
      validate(answer) {
        if (!answer) {
          return "Please, fill the team member's email address!";
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(answer)) {
          return "You have to provide a valid email address!";
        }
        return true;
      },
    },
    {
      type: "list",
      name: "role",
      message: "What's your team member's role?",
      choices: ["Manager", "Engineer", "Intern"],
      validate(answer) {
        if (!answer) {
          return "Please choose the role!";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "github",
      message: "What's your team member's github username",
      when(answers) {
        return answers.role === "Engineer";
      },
      validate(answer) {
        if (!answer) {
          return "Please, fill the team member's github name!";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What's your team member's officeNumber",
      when(answers) {
        return answers.role === "Manager";
      },
      validate(answer) {
        if (!answer) {
          return "Please, fill the team member's officeNumber!";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "school",
      message: "What's your team member's school name?",
      when(answers) {
        return answers.role === "Intern";
      },
      validate(answer) {
        if (!answer) {
          return "Please, fill the team member's school!";
        }
        return true;
      },
    },
  ]);
};
function ConvertIntoObject(obj) {
  switch (obj.role) {
    case "Manager":       
    memebers.push(new Manager(obj.id,obj.name,obj.email,obj.officeNumber));        
      break;
    case "Engineer":
        memebers.push(new Engineer(obj.id,obj.name,obj.email,obj.github));   
      break;
    case "Intern":
        memebers.push(new Intern(obj.id,obj.name,obj.email,obj.school));   
      break;

    default:
      break;
  }
}

const ReQuestion = (data) => {
    ConvertIntoObject(data);
  inquirer
    .prompt({
      type: "list",
      name: "option",
      message: "Do you want to add another team member??",
      choices: ["yes", "No"],
    })
    .then((response) => {
      if (response.option == "yes") {
        questions()
          .then((response) => {
            ReQuestion(response);
          })
          .catch((err) => console.error(err));
      } else {
        GenrateHTML();
      }
    });
};
function GenrateHTML() {
  const htmlPageContent = LoadHTML.generateHTMLPage(memebers);
  //console.log(memebers);

  const path = __dirname + "/dist/index.html";
  //console.log(path);
  fs.writeFile(path, htmlPageContent, (err) =>
    err ? console.log(err) : console.log("Successfully created index.html!")
  );
}
// TODO: Create a function to initialize app
function init() {
  questions()
    // Use writeFileSync method to use promises instead of a callback function
    .then((response) => {
      ReQuestion(response);
    })
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
