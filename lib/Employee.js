
class Employee {
constructor(id, name, email) {
    if (typeof id !== 'number' || !id) {
        throw new Error("Expected parameter id to be a non empty number");
      }
      if (typeof name !== 'string' || !name.trim().length) {
        throw new Error("Expected parameter name to be a non empty string");
      }
      if (typeof email !== 'string' || !email.trim().length) {
        throw new Error("Expected parameters 'email' to be a non empty value");
      }
    this.id = id;
    this.name = name;
    this.email = email;
  }
  getName()
  {
      return this.name;
  }
  getId()
  {
      return this.id;
  }
  getEmail()
  {
      return this.email;
  }
  getRole()
  {
      return `'Employee'`;
  }
}
module.exports = Employee;
