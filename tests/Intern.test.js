const Intern = require('../lib/Intern');
describe('Intern class !', () => {
    const name = 'Vinitha';
    const email = 'sreevinithaa@gmail.com';
    const id = 1;
    const school="sreevinithaa"
    describe("Initialization", () => {
        it("should create an object with a 'name','email','id' and 'school' property set to the name,email, id and school argument provided when called with the 'new' keyword.", () => {
          
            // Act
            const obj = new Intern(id,name,email,school);
      
            // Assert
            expect(obj).toBeInstanceOf(Intern);
          });
          it("Should throw exception if fail to pass four arguments", () => {
          
            const obj = () => new Intern(email);
           
      
            // Assert
            expect(obj).toThrowError(Error);
          });
    });
    describe("getRole()", () => {
        it("getRole() function should return role!", () => {
            // Arrange
           
            const role=`Intern`;
            // Act
            const obj = new Intern(id,name,email,school);
      
            // Assert
            expect(obj.getRole()).toEqual(role);
          });
    });
    describe("getschool()", () => {
        it("getschool() function should return school property value!", () => {
            // Arrange
           
            
            // Act
            const obj = new Intern(id,name,email,school);
      
            // Assert
            expect(obj.school).toEqual(school);
          });
    });

});