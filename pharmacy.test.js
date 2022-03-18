import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn (by default)", () => {
    expect(new Pharmacy([new Drug("Test Drug", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Test Drug", 1, 2)]
    );
  });

  it("should decrease the benefit twice after expiration (by default)", () => {
    expect(new Pharmacy([new Drug("Test Drug", -2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Test Drug", -3, 1)]
    );
  });

  it("benefit sould never be negative (by default)", () => {
    expect(new Pharmacy([new Drug("Test Drug", 0, 0)]).updateBenefitValue()).toEqual(
      [new Drug("Test Drug", -1, 0)]
    );
  });

  it("Herbal Tea benefit should increase When get older", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 3, 0)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 2, 1)]
    );
  });

  it("Herbal Tea benefit should increase twice after expiration", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 0, 0)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", -1, 2)]
    );
  });

  it("benefit should never be more than 50", () => { // for only Herbal Tea since it's the one that can increase benefit
    expect(new Pharmacy([new Drug("Herbal Tea", 0, 50)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", -1, 50)]
    );
  });

 it("Magic Pill should never expire", () => {
  expect(new Pharmacy([new Drug("Magic Pill", 2, 10)]).updateBenefitValue()).toEqual(
    [new Drug("Magic Pill", 2, 10)]
  );
});

 it("Magic Pill benefit should never decrease", () => {
  expect(new Pharmacy([new Drug("Magic Pill", 2, 10)]).updateBenefitValue()).toEqual(
    [new Drug("Magic Pill", 2, 10)]
  );
});

  it("Fervex benefit should increase when get older", () => {
  expect(new Pharmacy([new Drug("Fervex", 200, 10)]).updateBenefitValue()).toEqual(
    [new Drug("Fervex", 199, 11)]
  );
});

  it("Fervex benefit should not go more than 50", () => {
  expect(new Pharmacy([new Drug("Fervex", 200, 50)]).updateBenefitValue()).toEqual(
    [new Drug("Fervex", 199, 50)]
  );
});

 it("Fervex benefit should increase twice fast when expiration is 10 days or less and more than 5", () => {
  expect(new Pharmacy([new Drug("Fervex", 8, 10)]).updateBenefitValue()).toEqual(
    [new Drug("Fervex", 7, 12)]
  );
});

 it("Fervex benefit should increase thrice fast when expiration is 5 days or less", () => {
  expect(new Pharmacy([new Drug("Fervex", 2, 10)]).updateBenefitValue()).toEqual(
    [new Drug("Fervex", 1, 13)]
  );
});


 it("Fervex benefit should drop to zero after expiration", () => {
  expect(new Pharmacy([new Drug("Fervex", 0, 10)]).updateBenefitValue()).toEqual(
    [new Drug("Fervex", -1, 0)]
  );
});

 it("Dafalgan benefit should degrades twice fast as normal drug", () => {
  expect(new Pharmacy([new Drug("Dafalgan", 2, 6)]).updateBenefitValue()).toEqual(
    [new Drug("Dafalgan", 1, 4)]
  );
});

 it("Dafalgan benefit should degrades four times fast as normal drug after expiration", () => {
  expect(new Pharmacy([new Drug("Dafalgan", 0, 6)]).updateBenefitValue()).toEqual(
    [new Drug("Dafalgan", -1, 2)]
  );
});

 it("Dafalgan benefit should never be negative", () => {
  expect(new Pharmacy([new Drug("Dafalgan", 2, 0)]).updateBenefitValue()).toEqual(
    [new Drug("Dafalgan", 1, 0)]
  );
});


});
