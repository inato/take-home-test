import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn by one each", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });

  it("should decrease the benefit respecting the boundaries", () => {
    expect(new Pharmacy([new Drug("test", 0, 0)]).updateBenefitValue()).toEqual(
      [new Drug("test", -1, 0)]
    );

    expect(
      new Pharmacy([new Drug("test", -5, 56)]).updateBenefitValue()
    ).toEqual([new Drug("test", -6, 50)]);
  });
});
