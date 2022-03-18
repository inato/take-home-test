import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });

  it("should decrease the benefit twice fast after the expiration date", () => {
    expect(
      new Pharmacy([new Drug("test", -1, 3)]).updateBenefitValue()
    ).toEqual([new Drug("test", -2, 1)]);
  });

  it("benefit should never be negative", () => {
    expect(
      new Pharmacy([new Drug("test", -1, 0)]).updateBenefitValue()
    ).toEqual([new Drug("test", -2, 0)]);
  });

  // Herbal tea tests
  it("herbal tea benefit should increase in benefit the older it gets", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 1, 4)]);
  });

  it("herbal tea benefit Benefit should increase twice as fast after the expiration date", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", -1, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -2, 5)]);
  });

  it("herbal tea benefit should never be more than 50", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 2, 50)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 1, 50)]);
  });

  // Magic Pill tests
  it("Magic Pill should never expire nor decrease in benefit", () => {
    expect(
      new Pharmacy([new Drug("Magic Pill", 15, 40)]).updateBenefitValue()
    ).toEqual([new Drug("Magic Pill", 15, 40)]);
  });

  // Fervex tests
  it("fervex benefit should increase when its expiration date approaches", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 15, 40)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 14, 41)]);
  });

  it("fervex benefit should increase by 2 when 10 days or less before expiration date", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 9, 40)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 8, 42)]);
  });

  it("fervex benefit Should Increase by 3 when 5 days or less before expiration date", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 5, 40)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 4, 43)]);
  });

  it("fervex benefit should never be more than 50", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 2, 50)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 1, 50)]);
  });

  it("fervex benefit should drop to zero after expiration", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 0, 40)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", -1, 0)]);
  });

  // Dafalgan tests
  it("Dafalgan should degrades in benefit twice as fast as normal drugs", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", 1, 1)]);
  });

  it("Dafalgan benefit should never be negative", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", -1, 0)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", -2, 0)]);
  });
});
