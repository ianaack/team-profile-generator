const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  const employee = new Employee();
  expect(typeof employee).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const name = "Ian";
  const employee = new Employee(name);
  expect(employee.name).toBe(name);
});

test("Can set id via constructor argument", () => {
  const Id = 100;
  const employee = new Employee("Ian", Id);
  expect(employee.id).toBe(Id);
});

test("Can set email via constructor argument", () => {
  const email = "ianaack@gmail.com";
  const employee = new Employee("Ian", email);
  expect(employee.email).toBe("ianaack@gmail.com");
});

test("Can get name via getName()", () => {
  const name = "Ian";
  const employee = new Employee(name);
  expect(employee.getName()).toEqual(employee.name);
});

test("Can get id via getId()", () => {
  const id = 1;
  const employee = new Employee(id);
  expect(employee.getId()).toEqual(employee.id);
});

test("Can get email via getEmail()", () => {
  const email = "ianaack@gmail.com";
  const employee = new Employee(email);
  expect(employee.getEmail()).toEqual(employee.email);
});
