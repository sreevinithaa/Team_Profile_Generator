const Employee = require('../lib/Employee.js');
describe('Employee class !', () => {
    const name = 'Vinitha';
    const email = 'sreevinithaa@gmail.com';
    const id = 1;
    describe("Initialization", () => {
       
        it("should create an object with a 'name','email' and 'id' property set to the name,email and id argument provided when called with the 'new' keyword.", () => {
          
            // Act
            const obj = new Employee(id,name,email);
      
            // Assert
            expect(obj).toBeInstanceOf(Employee);
          });
          it("Should throw exception if fail to pass three arguments", () => {
          
            const emp = () => new Employee(email);
            const err = new Error(
              "Expected parameter id to be a non empty number"
            );
      
            // Assert
            expect(emp).toThrowError(Error);
          });
          it("should retun name property value from what passed through argument", () => {
            // Act
            const obj = new Employee(id,name,email);
      
            // Assert
            expect(obj.name).toEqual(name);
          });
          it("should return id property value which match with the value from what passed through argument", () => {
             
            // Act
            const obj = new Employee(id,name,email);
      
            // Assert
            expect(obj.id).toEqual(id);
          });
          it("should return email property value which match with the value from what passed through argument", () => {
            
            // Act
            const obj = new Employee(id,name,email);
      
            // Assert
            expect(obj.email).toEqual(email);
          });
          it("should throw an error if not provided 'id' a value.First parameter should be number", () => {
           
            const emp = () => new Employee(name,name,email);
            const err = new Error(
              "Expected parameter id to be a non empty number"
            );
      
            // Assert
            expect(emp).toThrowError(err);
          });
        
          it("should throw an error if not provided valid 'email'", () => {
           
            const emp = () => new Employee(id,name,name);
            const err = new Error(
              "Expected parameters 'email' is not valid"
            );
      
            // Assert
            expect(emp).toThrowError(err);
          });

    });
    describe("getName()", () => {
        it("getName() function should return name!", () => {
            
            // Act
            const obj = new Employee(id,name,email);
      
            // Assert
            expect(obj.getName()).toEqual(name);
          });
    });
    describe("getId()", () => {
        it("getId() function should return id!", () => {
           
            // Act
            const obj = new Employee(id,name,email);
      
            // Assert
            expect(obj.getId()).toEqual(id);
          });
    });
    describe("getEmail()", () => {
        it("getEmail() function should return email!", () => {
            // Arrange
            
            // Act
            const obj = new Employee(id,name,email);
      
            // Assert
            expect(obj.getEmail()).toEqual(email);
          });
    });
    describe("getRole()", () => {
        it("getRole() function should return role!", () => {
            // Arrange
           
            const role=`'Employee'`;
            // Act
            const obj = new Employee(id,name,email);
      
            // Assert
            expect(obj.getRole()).toEqual(role);
          });
    });

});