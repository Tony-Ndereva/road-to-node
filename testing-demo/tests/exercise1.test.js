const exercise = require("../exercise1");

describe("Testing fizzbuzz", () => {
  it("should be a number", () => {
    expect(() => {
      exercise.fizzBuzz(null);
    }).toThrow();
  });

  it("should be divisible by 3 and 5", () => {
    const result = exercise.fizzBuzz(15);
    expect(result).toBe("FizzBuzz");
  });
  it("should be  divisible by 3 ", () => {
    const result = exercise.fizzBuzz(3);
    expect(result).toBe("Fizz");
  });
  it("Should be divisible by 5 ", () => {
    const result = exercise.fizzBuzz(5);
    expect(result).toBe("Buzz");
  });

  it("Should return input if its not divisible by 3 or 5 ", () => {
    const result = exercise.fizzBuzz(1);
    expect(result).toBe(1);
  });
});
