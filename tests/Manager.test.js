const Manager = require('../lib/Manager.js');
describe('Manager class !', () => {
    const name = 'Vinitha';
    const email = 'sreevinithaa@gmail.com';
    const id = 1;
    const officenumber="56"
    describe("Initialization", () => {
        it("should create an object with a 'name','email','id' and 'officeNumber' property set to the name,email, id and officeNumber argument provided when called with the 'new' keyword.", () => {
          
            // Act
            const obj = new Manager(id,name,email,officenumber);
      
            // Assert
            expect(obj).toBeInstanceOf(Manager);
          });
          it("should throw an error if not provided 'Officenumber' a value and it should be a number", () => {
           
            const emp = () => new Manager(name,name,email,officenumber);
         
      
            // Assert
            expect(emp).toThrowError(Error);
          });
          it("Should throw exception if fail to pass four arguments", () => {
          
            const obj = () => new Manager(email);
           
      
            // Assert
            expect(obj).toThrowError(Error);
          });
    });
    describe("getOfficeNumber()", () => {
      it("getOfficeNumber() function should return Office number property value!", () => {
          // Arrange
         
          
          // Act
          const obj = new Manager(id,name,email,officenumber);
    
          // Assert
          expect(obj.getOfficeNumber()).toEqual(officenumber);
        });
  });
    describe("getRole()", () => {
        it("getRole() function should return role!", () => {
            // Arrange
           
            const role=`Manager`;
            // Act
            const obj = new Manager(id,name,email,officenumber);
      
            // Assert
            expect(obj.getRole()).toEqual(role);
          });
    });
   

});