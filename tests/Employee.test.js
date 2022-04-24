const Employee = require('../lib/Employee.js');
describe('Employee class !', () => {
    describe("Initialization", () => {
        it("should create an object with a 'name','email' and 'id' property set to the name,email and id argument provided when called with the 'new' keyword.When checking name property it should match with the value from what passed through argument", () => {
            // Arrange
            const name = 'Vinitha';
            const email = 'sreevinithaa@gmail.com';
            const id = 1;
            // Act
            const obj = new Employee(id,name,email);
      
            // Assert
            expect(obj.name).toEqual(name);
          });
          it("should create an object with a 'name','email' and 'id' property set to the name,email and id argument provided when called with the 'new' keyword.When checking id property it should match with the value from what passed through argument", () => {
            // Arrange
            const name = 'Vinitha';
            const email = 'sreevinithaa@gmail.com';
            const id = 1;
            // Act
            const obj = new Employee(id,name,email);
      
            // Assert
            expect(obj.id).toEqual(id);
          });
          it("should create an object with a 'name','email' and 'id' property set to the name,email and id argument provided when called with the 'new' keyword.When checking email property it should match with the value from what passed through argument", () => {
            // Arrange
            const name = 'Vinitha';
            const email = 'sreevinithaa@gmail.com';
            const id = 1;
            // Act
            const obj = new Employee(id,name,email);
      
            // Assert
            expect(obj.email).toEqual(email);
          });
          it("should throw an error if not provided 'id' a value.First parameter should be number", () => {
            // Arrange
            const name = 'Vinitha';
            const email = 'sreevinithaa@gmail.com';
            const emp = () => new Employee(name,email);
            const err = new Error(
              "Expected parameter id to be a non empty number"
            );
      
            // Assert
            expect(emp).toThrowError(err);
          });
          it("should throw an error if not provided 'name'  argument a value", () => {
            // Arrange
            const id = 1;
            const emp = () => new Employee(id);
            const err = new Error(
              "Expected parameter name to be a non empty string"
            );
      
            // Assert
            expect(emp).toThrowError(err);
          });
          it("should throw an error if not provided 'email' a  value", () => {
            // Arrange
            const name = 'Vinitha';
            const email = 'sreevinithaa@gmail.com';
            const id = 1;
            const emp = () => new Employee(id,name);
            const err = new Error(
              "Expected parameters 'email' to be a non empty value"
            );
      
            // Assert
            expect(emp).toThrowError(err);
          });

    });
    describe("getName()", () => {
        it("getName() function should return name!", () => {
            // Arrange
            const name = 'Vinitha';
            const email = 'sreevinithaa@gmail.com';
            const id = 1;
            // Act
            const obj = new Employee(id,name,email);
      
            // Assert
            expect(obj.getName()).toEqual(name);
          });
    });
    describe("getId()", () => {
        it("getId() function should return id!", () => {
            // Arrange
            const name = 'Vinitha';
            const email = 'sreevinithaa@gmail.com';
            const id = 1;
            // Act
            const obj = new Employee(id,name,email);
      
            // Assert
            expect(obj.getId()).toEqual(id);
          });
    });
    describe("getEmail()", () => {
        it("getEmail() function should return email!", () => {
            // Arrange
            const name = 'Vinitha';
            const email = 'sreevinithaa@gmail.com';
            const id = 1;
            // Act
            const obj = new Employee(id,name,email);
      
            // Assert
            expect(obj.getEmail()).toEqual(email);
          });
    });
    describe("getRole()", () => {
        it("getRole() function should return role!", () => {
            // Arrange
            const name = 'Vinitha';
            const email = 'sreevinithaa@gmail.com';
            const id = 1;
            const role=`'Employee'`;
            // Act
            const obj = new Employee(id,name,email);
      
            // Assert
            expect(obj.getRole()).toEqual(role);
          });
    });

});