import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });

  describe("Regular Drug", () => {
    it("should decrease the benefit and expiresIn", () => {
      expect(
        new Pharmacy([new Drug("Doliprane", 2, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Doliprane", 1, 2)]);
    });
  });

  describe("Magic Pill", () => {
    it("should not decrease the benefit nor expiresIn", () => {
      expect(
        new Pharmacy([new Drug("Magic Pill", 2, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Magic Pill", 2, 3)]);
    });
  });

  describe("Dafalgan", () => {
    it("should decrease the benefit twice as fast and decrease expiresIn", () => {
      expect(
        new Pharmacy([new Drug("Dafalgan", 2, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Dafalgan", 1, 1)]);
    });
  });

  describe("Herbal Tea", () => {
    it("should decrease expiresIn and increase benefit", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", 1, 4)]);
    });

    it("should decrease expiresIn and increase benefit by 2 (expiresIn below 0)", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", -1, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", -2, 5)]);
    });

    it("should decrease expiresIn and maintain benefit (can not increase because max)", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", -1, 50)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", -2, 50)]);
    });

    it("should decrease expiresIn and increase benefit (to max)", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", -1, 49)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", -2, 50)]);
    });
  });

  describe("Fervex", () => {
    it("should decrease expiresIn and increase benefit", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 20, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 19, 4)]);
    });

    it("should decrease expiresIn and increase benefit by 2 (below 10 days expiresIn)", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 10, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 9, 5)]);
    });

    it("should decrease expiresIn and increase benefit by 3 (below 5 days expiresIn)", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 5, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 4, 6)]);
    });

    it("should decrease expiresIn and zero benefit (expiresIn below 0)", () => {
      expect(
        new Pharmacy([new Drug("Fervex", -1, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", -2, 0)]);
    });

    it("should decrease expiresIn and maintain benefit (can not increase because max)", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 20, 50)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 19, 50)]);
    });

    it("should decrease expiresIn and maintain benefit (can not increase because max) (below 10 days expiresIn)", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 10, 50)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 9, 50)]);
    });

    it("should decrease expiresIn and maintain benefit (can not increase because max) (below 5 days expiresIn)", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 5, 50)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 4, 50)]);
    });

    it("should decrease expiresIn and increase benefit by 2 (to max) (below 10 days expiresIn)", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 10, 49)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 9, 50)]);
    });

    it("should decrease expiresIn and decrease benefit by 3 (to max) (below 5 days expiresIn)", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 5, 48)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 4, 50)]);
    });
  });
});
