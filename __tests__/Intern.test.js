const Intern = require("../lib/Intern");

test("get Intern data from Employee Class", () => {
  const intern = new Intern("Ian", 1, "ianaack@gmail.com");

  expect(intern.name).toBe("Ian");
  expect(intern.id).toBe(1);
  expect(intern.email).toBe("ianaack@gmail.com");
});

test("get Intern school data", () => {
  const intern = new Intern(
    "Ian",
    1,
    "ianaack@gmail.com",
    "University of Toronto"
  );

  expect(intern.school).toBe("University of Toronto");
});

test("get all of the Intern's data", () => {
  const intern = new Intern(
    "Ian",
    1,
    "ianaack@gmail.com",
    "University of Toronto"
  );

  expect(intern.getRole()).toHaveProperty("school");
});

test("get Intern's school from getSchool()", () => {
  const intern = new Intern(
    "Ian",
    1,
    "ianaack@gmail.com",
    "University of Toronto"
  );

  expect(intern.getSchool()).toEqual(intern.school);
});
