const Employee = require("../lib/Employee.js");
class Manager extends Employee {
  constructor(id, name, email, officeNumber) {
    {
      if (!id || !name || !email || !officeNumber) {
        // console.log(`id : ${id} name: ${name} email ${email}`);
        throw new Error(
          "Expected four arguments! Cannot initiate without four arguments."
        );
      }
      super(id, name, email);
      this.officeNumber = officeNumber;
    }
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }
}
module.exports = Manager;
