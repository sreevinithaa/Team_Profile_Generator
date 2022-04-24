const Employee = require("../lib/Employee.js");
class Intern extends Employee {
  constructor(id, name, email, school) {
    {
      if (!id || !name || !email || !school) {
        // console.log(`id : ${id} name: ${name} email ${email}`);
        throw new Error(
          "Expected four arguments! Cannot initiate without four arguments."
        );
      }
      super(id, name, email);
      this.school = school;
    }
  }
  getSchool()
  {
      return this.school;
  }
  getRole() {
    return "Intern";
  }
}
module.exports = Intern;
