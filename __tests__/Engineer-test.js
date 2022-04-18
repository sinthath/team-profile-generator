// Import class constructors
const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");


describe("Engineer", () => {
  
  
  describe("Engineer object instantiation", () => {
    it("Creates an object with name, id, email, and github properties", () => {
      const engineer = new Engineer("Scott Test", 1, "scotttest@gmail.com", "scottgit");

      expect(engineer).toBeInstanceOf(Engineer);
      expect(engineer.name).toEqual("Scott Test");
      expect(engineer.id).toEqual(1);
      expect(engineer.email).toEqual("scotttest@gmail.com");
      expect(engineer.github).toEqual("scottgit");
    });
  });

  
  describe("getName", () => {
    it("Should return the object's name property", () => {
      const engineer = new Engineer("Scott Test", 1, "scotttest@gmail.com", "scottgit");

      expect(engineer.getName()).toEqual("Scott Test");
    });
  });

  
  describe("getId", () => {
    it("Should return the object's id property", () => {
      const engineer = new Engineer("Scott Test", 1, "scotttest@gmail.com", "scottgit");

      expect(engineer.getID()).toEqual(1);
    });
  });

  
  describe("getEmail", () => {
    it("Should return the object's email property", () => {
      const engineer = new Engineer("Scott Test", 1, "scotttest@gmail.com", "scottgit");

      expect(engineer.getEmail()).toEqual("scotttest@gmail.com");
    });
  });

 
  describe("getGithub", () => {
    it("Should return the object's github property", () => {
      const engineer = new Engineer("Scott Test", 1, "scotttest@gmail.com", "scottgit");

      expect(engineer.getGithub()).toEqual("scottgit");
    });
  });

  
  describe("getRole", () => {
    it("Should return the string 'Engineer", () => {
      const engineer = new Engineer("Scott Test", 1, "scotttest@gmail.com", "scottgit");

      expect(engineer.getRole()).toEqual("Engineer");
    });
  });
});