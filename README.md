# Team_Profile_Generator

## Table of Contents

- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Questions](#questions)

## Description

Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.

## User Story
```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria
```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Installation

`npm init`

`npm install inquirer`

## Usage

Run the following command at th root of your project and answer the prompted questions:

`node index.js`

## Contributing

[Vinitha Gowtheepan](https://github.com/sreevinithaa)

## Vedio of functionality

![Team profile generator gif link](./assets/vedio/Readme%20Generator_%20Apr%2018%2C%202022%206_46%20PM.gif)<br>
The full movie file showing functionality of the application can be found [here](https://sreevinithaa.github.io/Team_Profile_Generator/src/assets/vedio/Team_Profile_Generator.mp4)

## Last Generated Html page link

https://sreevinithaa.github.io/Team_Profile_Generator/dist/index.html


## Repository

You can get the code in the following link. https://github.com/sreevinithaa/Team_Profile_Generator.git


## Questions

Contact me with any questions: [email](mailto:sreevinithaa@gmail.com) , [GitHub](https://github.com/sreevinithaa)<br />



