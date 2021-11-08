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
});
