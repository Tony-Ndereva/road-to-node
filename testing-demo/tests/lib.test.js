const lib = require("../lib");

// describe("absolute", () => {
//   it(" should return a positive number if input is positive ", () => {
//     const result = lib.absolute(1);
//     expect(result).toBe(1);
//   });

//   it(" should return a positive number if input is negative ", () => {
//     const result = lib.absolute(-1);
//     expect(result).toBe(1);
//   });

//   it(" should return a positive number if input is negative ", () => {
//     const result = lib.absolute(0);
//     expect(result).toBe(0);
//   });
// });

// describe("greet", () => {
//   it("should return the greeting message", () => {
//     const result = lib.greet("Tony");

//     expect(result).toContain("Tony");
//   });
// });

describe("getCurrencies", () => {
  it("Should return supported currencies", () => {
    const result = lib.getCurrencies();
    expect(result).toContain("USD");
    expect(result).toContain("AUD");
    expect(result).toContain("EUR");


    // 
    expect
  });
});
