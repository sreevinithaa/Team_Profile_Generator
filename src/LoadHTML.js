var Employee = require("../lib/Employee");
var Engineer = require("../lib/Engineer");
var Intern = require("../lib/Intern");
var Manager = require("../lib/Manager");

function GetContentByRole(obj)
{
var content="";
if(obj.getRole()=="Manager")
{
    content="OfficeNumber : "+obj.getOfficeNumber();
}
else if(obj.getRole()=="Engineer")
{
    content="Github : "+obj.getGithub();
}
else{
    content="School : "+obj.getSchool();
}
return content;
}
function generateHTMLPage(members) {
  let content = "";
  members.forEach((element) => {
      const obj=
    content =
      content +
      ` <div class="card col-sm-6 col-md-4 col-lg-3 text-white bg-dark mb-1 mr-1">
        <div class="card-header"> 
        <h6 class="card-title">${element.getName()}</h6>
        <h6 class="card-title">${element.getRole()}</h6>
        </div>
        <div class="card-body bg-light text-dark p-4">
       
           <div class="row">ID : ${element.getId()}</div>
            <div class="row">Email : ${element.getEmail()}</div>
            <div class="row">${GetContentByRole(element)}</div>
        </div>
    </div>`;
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
