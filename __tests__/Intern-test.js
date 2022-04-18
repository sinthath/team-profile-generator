// Import class constructors
const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");


describe("Intern", () => {
  
  
  describe("Intern object instantiation", () => {
    it("Creates an object with name, id, email, and school properties", () => {
      const intern = new Intern("Scott Test", 1, "scotttest@gmail.com", "University of Toronto");

      expect(intern).toBeInstanceOf(Intern);
      expect(intern.name).toEqual("Scott Test");
      expect(intern.id).toEqual(1);
      expect(intern.email).toEqual("scotttest@gmail.com");
      expect(intern.school).toEqual("University of Toronto");
    });
  });

  
  describe("getName", () => {
    it("Should return the object's name property", () => {
      const intern = new Intern("Scott Test", 1, "scotttest@gmail.com", "University of Toronto");

      expect(intern.getName()).toEqual("Scott Test");
    });
  });

 
  describe("getId", () => {
    it("Should return the object's id property", () => {
      const intern = new Intern("Scott Test", 1, "scotttest@gmail.com", "University of Toronto");

      expect(intern.getID()).toEqual(1);
    });
  });

  
  describe("getEmail", () => {
    it("Should return the object's email property", () => {
      const intern = new Intern("Scott Test", 1, "scotttest@gmail.com", "University of Toronto");

      expect(intern.getEmail()).toEqual("scotttest@gmail.com");
    });
  });

  describe("getSchool", () => {
    it("Should return the object's school property", () => {
      const intern = new Intern("Scott Test", 1, "scotttest@gmail.com", "University of Toronto");

      expect(intern.getSchool()).toEqual("University of Toronto");
    });
  });

  
  describe("getRole", () => {
    it("Should return the string 'Intern", () => {
      const intern = new Intern("Scott Test", 1, "scotttest@gmail.com", "University of Toronto");

      expect(intern.getRole()).toEqual("Intern");
    });
  });
});