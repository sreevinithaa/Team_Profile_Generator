const Employee = require("../lib/Employee.js");
class Engineer extends Employee {
  constructor(id, name, email, github) {
    {
      if (!id || !name || !email || !github) {
        // console.log(`id : ${id} name: ${name} email ${email}`);
        throw new Error(
          "Expected four arguments! Cannot initiate without four arguments."
        );
      }
      super(id, name, email);
      this.github = github;
    }
  }
  getGithub()
  {
      return this.github;
  }
  getRole() {
    return "Engineer";
  }
}
module.exports = Engineer;
