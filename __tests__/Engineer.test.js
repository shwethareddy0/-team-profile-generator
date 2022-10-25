const Engineer = require("../lib/Engineer");

const testEngineer = new Engineer(
  "temp Engineer",
  3,
  "abc@gmail.com",
  "shwethareddy0"
);

describe("Engineer test", () => {
  it("returns Engineer name", () => {
    expect(testEngineer.getName()).toBe("temp Engineer");
  });

  it("returns Engineer id", () => {
    expect(testEngineer.getId()).toBe(3);
  });

  it("returns Engineer email", () => {
    expect(testEngineer.getEmail()).toBe("abc@gmail.com");
  });

  it("returns Engineer github", () => {
    expect(testEngineer.getGithub()).toBe("shwethareddy0");
  });

  it("returns Engineer role", () => {
    expect(testEngineer.getRole()).toBe("Engineer");
  });
});
