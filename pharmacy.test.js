import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });
  it("should increase the benefit of Herbal Tea by 2 and decrease expiresIn by 1", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", -1, 4)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -2, 6)]);
  });
  it("should increase the benefit of Fervex by 3 and decrease expiresIn by 1", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 5, 30)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 4, 33)]);
  });
  it("should increase the benefit of Fervex by 2 and decrease expiresIn by 1", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 6, 30)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 5, 32)]);
  });
  it("should increase the benefit of Fervex by 1 and decrease expiresIn by 1", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 17, 30)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 16, 31)]);
  });
  it("should decrease the benefit of Dafalgan by 2 and decrease expiresIn by 1", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 3, 2)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", 2, 0)]);
  });
  it("should decrease the benefit of Dafalgan by 4 and decrease expiresIn by 1", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 0, 20)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", -1, 16)]);
  });
  it("should keep magic pill", () => {
    expect(
      new Pharmacy([new Drug("Magic Pill", 14, 40)]).updateBenefitValue()
    ).toEqual([new Drug("Magic Pill", 14, 40)]);
  });
  it("should keep the benefit of Herbal Tea under 50 and decrease its expiresIn by 1", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 5, 50)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 4, 50)]);
  });
});
