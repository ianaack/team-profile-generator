const Engineer = require("../lib/Engineer");

test("get Engineer data from Employee Class", () => {
  const engineer = new Engineer("Ian", 1, "ianaack@gmail.com");

  expect(engineer.name).toBe("Ian");
  expect(engineer.id).toBe(1);
  expect(engineer.email).toBe("ianaack@gmail.com");
});

test("get Engineer github data", () => {
  const engineer = new Engineer(
    "Ian",
    1,
    "ianaack@gmail.com",
    "github.com/ianaack"
  );

  expect(engineer.github).toBe("github.com/ianaack");
});

test("get all of the Engineer's data", () => {
  const engineer = new Engineer(
    "Ian",
    1,
    "ianaack@gmail.com",
    "github.com/ianaack"
  );

  expect(engineer.getRole()).toHaveProperty("github");
});

test("get Engineer's github from getGithub()", () => {
  const engineer = new Engineer(
    "Ian",
    1,
    "ianaack@gmail.com",
    "github.com/ianaack"
  );

  expect(engineer.getGithub()).toEqual(engineer.github);
});
