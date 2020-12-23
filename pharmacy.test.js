import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(
      new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("test", 1, 2)]);
  });

  it("should decrease benefit twice as fast if expiration has passed", () => {
    expect(
      new Pharmacy([new Drug("test", -1, 3)]).updateBenefitValue()
    ).toEqual([new Drug("test", -2, 1)]);
  });

  it("should never be a negative item benefit", () => {
    expect(
      new Pharmacy([new Drug("test", -1, 0)]).updateBenefitValue()
    ).toEqual([new Drug("test", -2, 0)]);
  });

  it("should never be an item benefit over 50", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 5, 50)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 4, 50)]);
  });

  it("should never decrease any value if Magic Pill", () => {
    expect(
      new Pharmacy([new Drug("Magic Pill", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Magic Pill", 2, 3)]);
  });

  it("should increase benefit if Herbal Tea, twice faster after expiration", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 15, 9)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 14, 10)]);
    expect(
      new Pharmacy([new Drug("Herbal Tea", -1, 9)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -2, 11)]);
  });

  it("should dynamically increase or drop to 0 when expired if Fervex", () => {
    //Benefit increases by 2 when there are 10 days or less
    expect(
      new Pharmacy([new Drug("Fervex", 10, 5)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 9, 7)]);
    //Benefit increases by 3 when there are 5 days or less
    expect(
      new Pharmacy([new Drug("Fervex", 5, 5)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 4, 8)]);
    //Benefit drops to 0 when expired
    expect(
      new Pharmacy([new Drug("Fervex", 0, 5)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", -1, 0)]);
  });

  it("should decrease benefit of Dafalgan twice faster than a normal drug", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 10, 5)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", 9, 3)]);
    expect(
      new Pharmacy([new Drug("Dafalgan", -2, 5)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", -3, 1)]);
  });
});
