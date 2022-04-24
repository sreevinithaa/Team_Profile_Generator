const Engineer = require('../lib/Engineer');
describe('Engineer class !', () => {
    const name = 'Vinitha';
    const email = 'sreevinithaa@gmail.com';
    const id = 1;
    const github="sreevinithaa"
    describe("Initialization", () => {
        it("should create an object with a 'name','email','id' and 'github' property set to the name,email, id and github argument provided when called with the 'new' keyword.", () => {
          
            // Act
            const obj = new Engineer(id,name,email,github);
      
            // Assert
            expect(obj).toBeInstanceOf(Engineer);
          });
          it("Should throw exception if fail to pass four arguments", () => {
          
            const obj = () => new Engineer(email);
           
      
            // Assert
            expect(obj).toThrowError(Error);
          });
    });
    describe("getRole()", () => {
        it("getRole() function should return role!", () => {
            // Arrange
           
            const role=`Engineer`;
            // Act
            const obj = new Engineer(id,name,email,github);
      
            // Assert
            expect(obj.getRole()).toEqual(role);
          });
    });
    describe("getGithub()", () => {
        it("getGithub() function should return github property value!", () => {
            // Arrange
           
            
            // Act
            const obj = new Engineer(id,name,email,github);
      
            // Assert
            expect(obj.github).toEqual(github);
          });
    });

});