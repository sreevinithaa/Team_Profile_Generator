const Employee = require("../lib/Employee.js");
class Manager extends Employee {
  constructor(id, name, email, officeNumber) {
    {
      const number_pattern=/^0|[1-9]\d*$/;
      if (!id || !name || !email || !officeNumber) {
        // console.log(`id : ${id} name: ${name} email ${email}`);
        throw new Error(
          "Expected four arguments! Cannot initiate without four arguments."
        );
      }
      else if (!number_pattern.test(officeNumber)) {
        throw new Error("Expected parameter id to be a non empty number");
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
