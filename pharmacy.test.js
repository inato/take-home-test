import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(
      new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("test", 1, 2)]);
  });

  it("should not decrease in benefit nor expire", () => {
    expect(
      new Pharmacy([new Drug("Magic Pill", 1, 1)]).updateBenefitValue()
    ).toEqual([new Drug("Magic Pill", 1, 1)]);
  });

  it("should increase benefit and decrease expiresIn", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 1, 1)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 0, 2)]);
  });

  it("should decrease the benefit twice as normal", () => {
    expect(
      new Pharmacy([
        new Drug("normal", 2, 2),
        new Drug("Dafalgan", 2, 2)
      ]).updateBenefitValue()
    ).toEqual([new Drug("normal", 1, 1), new Drug("Dafalgan", 1, 0)]);
  });

  it("should decrease the benefit twice as normal after expiry", () => {
    expect(
      new Pharmacy([
        new Drug("normal", 0, 2),
        new Drug("Dafalgan", 0, 4)
      ]).updateBenefitValue()
    ).toEqual([new Drug("normal", -1, 0), new Drug("Dafalgan", -1, 0)]);
  });

  it("should increase benefit twice after expiresIn", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 0, 1)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -1, 3)]);
  });

  it("should increase benefit twice when 10 days before expiresIn", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 7, 1)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 6, 3)]);
  });

  it("should increase benefit three times when 5 days before expiresIn", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 4, 1)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 3, 4)]);
  });

  it("should drop benefit to 0 after expiresIn", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 0, 20)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", -1, 0)]);
  });

  it("shoud not exceed benefit of 50", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", -19, 49)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -20, 50)]);
  });
});
