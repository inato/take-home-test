import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  describe("Default case", () => {
    it("should decrease the benefit and expiresIn by one each", () => {
      expect(
        new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()
      ).toEqual([new Drug("test", 1, 2)]);
    });

    it("should decrease the benefit respecting the boundaries", () => {
      expect(
        new Pharmacy([new Drug("test", 0, 0)]).updateBenefitValue()
      ).toEqual([new Drug("test", -1, 0)]);

      expect(
        new Pharmacy([new Drug("test", -5, 56)]).updateBenefitValue()
      ).toEqual([new Drug("test", -6, 50)]);
    });

    it("should decrease the benefit by two once reached the expiration date", () => {
      expect(
        new Pharmacy([new Drug("test", -5, 30)]).updateBenefitValue()
      ).toEqual([new Drug("test", -6, 28)]);
    });
  });

  describe("Herbal Tea case", () => {
    it("should increase the benefit the older it gets", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", 1, 4)]);
    });

    it("should increase twice the benefit after the expiration date", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", -1, 30)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", -2, 32)]);
    });
  });

  describe("Magic Pill case", () => {
    it("should not change the benefit nor the expireIn", () => {
      expect(
        new Pharmacy([new Drug("Magic Pill", 15, 40)]).updateBenefitValue()
      ).toEqual([new Drug("Magic Pill", 15, 40)]);
    });
  });

  describe("Fervex case", () => {
    it("should increase benefit by 1 when there are more than 10 days", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 15, 30)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 14, 31)]);
    });

    it("should increase benefit by 2 when there are 10 days or less", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 10, 31)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 9, 33)]);
    });

    it("should increase benefit by 3 when there are 5 days or less", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 5, 33)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 4, 36)]);
    });

    it("should drop the benefit at 0 when the expiration date is reached", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 0, 36)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", -1, 0)]);
    });
  });
});
