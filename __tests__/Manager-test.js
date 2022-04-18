// Import class constructors
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");


describe("Manager", () => {
  
  
  describe("Manager object instantiation", () => {
    it("Creates an object with name, id, email, and officeNumber properties", () => {
      const manager = new Manager("Scott Test", 1, "scotttest@gmail.com", 43);

      expect(manager).toBeInstanceOf(Manager);
      expect(manager.name).toEqual("Scott Test");
      expect(manager.id).toEqual(1);
      expect(manager.email).toEqual("scotttest@gmail.com");
      expect(manager.officeNumber).toEqual(50);
    });
  });

  describe("getName", () => {
    it("Should return the object's name property", () => {
      const manager = new Manager("Scott Test", 1, "scotttest@gmail.com", 43);

      expect(manager.getName()).toEqual("Scott Test");
    });
  });

  describe("getId", () => {
    it("Should return the object's id property", () => {
      const manager = new Manager("Scott Test", 1, "scotttest@gmail.com", 43);

      expect(manager.getID()).toEqual(1);
    });
  });

  describe("getEmail", () => {
    it("Should return the object's email property", () => {
      const manager = new Manager("Scott Test", 1, "scotttest@gmail.com", 43);

      expect(manager.getEmail()).toEqual("scotttest@gmail.com");
    });
  });
  
  describe("getOffice", () => {
    it("Should return the object's officeNumber property", () => {
      const manager = new Manager("Scott Test", 1, "scotttest@gmail.com", 43);

      expect(manager.getOffice()).toEqual(50);
    });
  });

  describe("getRole", () => {
    it("Should return the string 'Manager'", () => {
      const manager = new Manager("Scott Test", 1, "scotttest@gmail.com", 43);

      expect(manager.getRole()).toEqual("Manager");
    });
  });
});