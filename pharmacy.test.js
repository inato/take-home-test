import { Pharmacy } from "./pharmacy";
import { Drug } from "./drug";

describe("Pharmacy", () => {
  it("Default : should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });

  it("Default : should decrease benefit twice as fast when the expiration date has passed", () => {
    expect(new Pharmacy([new Drug("test", 0, 4)]).updateBenefitValue()).toEqual(
      [new Drug("test", 0, 2)]
    );
  });

  it("Default : should not allow benefit to go over 50", () => {
    expect(
      new Pharmacy([new Drug("test", 1, 60)]).updateBenefitValue()
    ).toEqual([new Drug("test", 0, 50)]);
  });

  it("Herbal Tea : should increase benefit twice as fast after the expiration date", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 0, 1)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 0, 3)]);
  });

  it("Magic Pill : should not change anything", () => {
    expect(
      new Pharmacy([new Drug("Magic Pill", 1, 1)]).updateBenefitValue()
    ).toEqual([new Drug("Magic Pill", 1, 1)]);
  });

  it("Fervex : should increase  benefit twice as fast if the expiration date <= 10 ", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 10, 1)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 9, 3)]);
  });

  it("Fervex : should increase benefit triple as fast if the expiration date <= 5 ", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 5, 1)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 4, 4)]);
  });

  it("Fervex : should lower benefit to 0 if the expiration date === 0 ", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 1, 30)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 0, 0)]);
  });

  it("Dafalgan : should decrease benefit twice as fast", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 1, 2)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", 0, 0)]);
  });
});
