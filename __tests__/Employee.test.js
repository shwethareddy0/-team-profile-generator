const Employee = require("../lib/Employee");

const testEmployee = new Employee("temp employee", 1, "abc@gmail.com");

describe("Employee test", () => {
  it("returns Employee name", () => {
    expect(testEmployee.getName()).toBe("temp employee");
  });

  it("returns Employee id", () => {
    expect(testEmployee.getId()).toBe(1);
  });

  it("returns Employee email", () => {
    expect(testEmployee.getEmail()).toBe("abc@gmail.com");
  });
  it("returns Employee role", () => {
    expect(testEmployee.getRole()).toBe("Employee");
  });
});
