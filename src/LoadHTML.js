var Employee = require("../lib/Employee");
var Engineer = require("../lib/Engineer");
var Intern = require("../lib/Intern");
var Manager = require("../lib/Manager");

//Get github link for role helper method
function GetContentByRole(obj) {
  var content = "";
  if (obj.getRole() == "Manager") {
    content = "OfficeNumber : " + obj.getOfficeNumber();
  } else if (obj.getRole() == "Engineer") {
    content = `Github : <a href="https://github.com/${obj.getGithub()}">${obj.getGithub()}</a>`;
  } else {
    content = "School : " + obj.getSchool();
  }
  return content;
}

//Get Role icon healper method
function GetRoleIcon(obj) {
  var content = "";
  if (obj.getRole() == "Manager") {
    content =
      `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cup" viewBox="0 0 16 16">
    <path d="M1 2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1h.5A1.5 1.5 0 0 1 16 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-.55a2.5 2.5 0 0 1-2.45 2h-8A2.5 2.5 0 0 1 1 12.5V2zm13 10h.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H14v8zM13 2H2v10.5A1.5 1.5 0 0 0 3.5 14h8a1.5 1.5 0 0 0 1.5-1.5V2z"/>
  </svg>  ` + obj.getRole();
  } else if (obj.getRole() == "Engineer") {
    content =
      `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyeglasses" viewBox="0 0 16 16">
    <path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A1.993 1.993 0 0 0 8 6c-.532 0-1.016.208-1.375.547zM14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
  </svg>  ` + obj.getRole();
  } else {
    content =
      `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stack" viewBox="0 0 16 16">
    <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z"/>
    <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z"/>
  </svg>  ` + obj.getRole();
  }
  return content;
}

//Generate Role Profile html content
function generateHTMLPage(members) {
  let content = "";
  members.forEach((element) => {
    const obj = (content =
      content +
      ` <div class=" shadow card col-sm-6 col-md-4 col-lg-3 text-white bg-dark mb-1 mr-1">
        <div class="card-header"> 
        <h6 class="card-title">${element.getName()}</h6>
        <h6 class="card-title">${GetRoleIcon(element)}</h6>
        </div>
        <div class="card-body mb-2 bg-light text-dark p-4">
       
           <div class="row">ID : ${element.getId()}</div>
            <div class="row">Email : <a href="MailTo:${element.getEmail()}">${element.getEmail()}</a></div>
            <div class="row">${GetContentByRole(element)}</div>
        </div>
    </div>`);
  });
  // console.log(members[0].name)
  return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Memebers</title>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.8.1/font/bootstrap-icons.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/styles.css">
</head>

<body>
    <div class="container-fluid">

        <h1 class="bg-dark text-white border rounded p-5 text-center">My Team Members</h1>
        <div class="d-flex flex-row p-3 m-3" id="grid">
          ${content}
           
        </div>
    </div>
</body>

</html>`;
}

module.exports = {
  generateHTMLPage,
};
