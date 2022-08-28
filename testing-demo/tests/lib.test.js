const lib = require("../lib");
const db = require("../db");
describe("applyDiscount", () => {
  it("should apply 10% discount if customer has more than 10 points", () => {
    db.getCustomerSync = function (customerId) {
      console.log("Fake reading customer ....");
      return { id: customerId, points: 20 };
    };
    const order = { customerId: 1, totalPrice: 10 };
    lib.applyDiscount(order);
    expect(order.totalPrice).toBe(9);
  });
});

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

// describe("getCurrencies", () => {
//   it("Should return supported currencies", () => {
//     const result = lib.getCurrencies();
//     // expect(result).toContain("USD");
//     // expect(result).toContain("AUD");
//     // expect(result).toContain("EUR");

//     //ideal
//     expect(result).toEqual(expect.arrayContaining(["EUR", "USD", "AUD"]));
//   });
// });

// describe("getProduct", () => {
//   it("should return the product with the given id", () => {
//     const result = lib.getProduct(1);
//     expect(result).toEqual({ id: 1, price: 10 });
//   });
// });

// describe("registerUSer", () => {
//   it("should throw if username is falsy", () => {
//     //Null
//     //Undefined
//     //NaN
//     //''
//     // 0
//     // false
//     const args = [null, undefined, NaN, "", 0, false];

//     args.map((a) => {
//       expect(() => {
//         lib.registerUser(a);
//       }).toThrow();
//     });
//   });

//   it("should return a user object if value username is passed", () => {
//     const result = lib.registerUser("Tony");
//     expect(result).toMatchObject({ username: "Tony" });
//     expect(result.id).toBeGreaterThan(0);
//   });
// });
