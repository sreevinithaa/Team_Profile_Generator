class Employee {
  constructor(id, name, email) {
    const email_pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
   const number_pattern=/^0|[1-9]\d*$/;
    if (!id || !name || !email) {
       // console.log(`id : ${id} name: ${name} email ${email}`);
      throw new Error("Expected three arguments! Cannot initiate without three arguments.");
    } else if (!number_pattern.test(id)) {
      throw new Error("Expected parameter id to be a non empty number");
     } else if (typeof email !== "string"|| !email_pattern.test(email)) {
      throw new Error("Expected parameters 'email' is not valid");
    }
    this.id = id;
    this.name = name;
    this.email = email;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return `'Employee'`;
  }
}
module.exports = Employee;
