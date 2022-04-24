const Manager = require('../lib/Manager.js');
describe('Manager class !', () => {
    const name = 'Vinitha';
    const email = 'sreevinithaa@gmail.com';
    const id = 1;
    const officenumber="sdf"
    describe("Initialization", () => {
        it("should create an object with a 'name','email','id' and 'officeNumber' property set to the name,email, id and officeNumber argument provided when called with the 'new' keyword.", () => {
          
            // Act
            const obj = new Manager(id,name,email,officenumber);
      
            // Assert
            expect(obj).toBeInstanceOf(Manager);
          });
          it("Should throw exception if fail to pass four arguments", () => {
          
            const obj = () => new Manager(email);
           
      
            // Assert
            expect(obj).toThrowError(Error);
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