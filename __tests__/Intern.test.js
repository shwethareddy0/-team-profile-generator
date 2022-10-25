const Intern = require("../lib/Intern");

const testIntern = new Intern("temp Intern", 4, "abc@gmail.com", "UC Berkeley");

describe("Intern test", () => {
  it("returns Intern name", () => {
    expect(testIntern.getName()).toBe("temp Intern");
  });

  it("returns Intern id", () => {
    expect(testIntern.getId()).toBe(4);
  });

  it("returns Intern email", () => {
    expect(testIntern.getEmail()).toBe("abc@gmail.com");
  });

  it("returns Intern school", () => {
    expect(testIntern.getSchool()).toBe("UC Berkeley");
  });

  it("returns Intern role", () => {
    expect(testIntern.getRole()).toBe("Intern");
  });
});
