const Manager = require("../lib/Manager");

test("get Manager data from Employee Class", () => {
  const manager = new Manager("Ian", 1, "ianaack@gmail.com");

  expect(manager.name).toBe("Ian");
  expect(manager.id).toBe(1);
  expect(manager.email).toBe("ianaack@gmail.com");
});

test("get Manager officeNumber", () => {
  const manager = new Manager("Ian", 1, "ianaack@gmail.com", 101);

  expect(manager.officeNumber).toBe(101);
});

test("get all of the Manager's data", () => {
  const manager = new Manager("Ian", 1, "ianaack@gmail.com", 101);
  expect(manager.getRole()).toHaveProperty("officeNumber");
});

test("get Managers officeNumber from getOfficeNumber()", () => {
  const manager = new Manager("Ian", 1, "ianaack@gmail.com", 101);

  expect(manager.getOfficeNumber()).toEqual(manager.officeNumber);
});
