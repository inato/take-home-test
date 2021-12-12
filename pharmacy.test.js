import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  describe("Basics cases", () => {
    it("should decrease the benefit and expiresIn", () => {
      expect(
        new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()
      ).toEqual([new Drug("test", 1, 2)]);
    });

    it("should decrease benefit by 2 and expiresIn", () => {
      expect(
        new Pharmacy([new Drug("test", 0, 3)]).updateBenefitValue()
      ).toEqual([new Drug("test", -1, 1)]);
    });

    it("should not change benefit", () => {
      expect(
        new Pharmacy([new Drug("test", 5, 0)]).updateBenefitValue()
      ).toEqual([new Drug("test", 4, 0)]);
    });
  });

  describe("Special cases", () => {
    describe("Herbal Tea", () => {
      it("should increase benefit and decrease expiresIn", () => {
        expect(
          new Pharmacy([new Drug("Herbal Tea", 10, 10)]).updateBenefitValue()
        ).toEqual([new Drug("Herbal Tea", 9, 11)]);
      });

      it("should increase benefit by 2 and decrease expiresIn ", () => {
        expect(
          new Pharmacy([new Drug("Herbal Tea", 0, 10)]).updateBenefitValue()
        ).toEqual([new Drug("Herbal Tea", -1, 12)]);
      });

      it("should not change benefit", () => {
        expect(
          new Pharmacy([new Drug("Herbal Tea", 5, 50)]).updateBenefitValue()
        ).toEqual([new Drug("Herbal Tea", 4, 50)]);
      });
    });

    describe("Magic Pill", () => {
      it("should not change benefit and expiresIn", () => {
        expect(
          new Pharmacy([new Drug("Magic Pill", 10, 10)]).updateBenefitValue()
        ).toEqual([new Drug("Magic Pill", 10, 10)]);

        expect(
          new Pharmacy([new Drug("Magic Pill", 10, 50)]).updateBenefitValue()
        ).toEqual([new Drug("Magic Pill", 10, 50)]);
      });
    });

    describe("Fervex", () => {
      it("should increase benefit by 2 and decrease expiresIn", () => {
        expect(
          new Pharmacy([new Drug("Fervex", 10, 10)]).updateBenefitValue()
        ).toEqual([new Drug("Fervex", 9, 12)]);
      });

      it("should increase benefit by 2 and decrease expiresIn", () => {
        expect(
          new Pharmacy([new Drug("Fervex", 5, 10)]).updateBenefitValue()
        ).toEqual([new Drug("Fervex", 4, 13)]);
      });

      it("should lead benefit to 0 and decrease expiresIn ", () => {
        expect(
          new Pharmacy([new Drug("Fervex", 0, 10)]).updateBenefitValue()
        ).toEqual([new Drug("Fervex", -1, 0)]);
      });

      it("should not change benefit", () => {
        expect(
          new Pharmacy([new Drug("Fervex", 25, 50)]).updateBenefitValue()
        ).toEqual([new Drug("Fervex", 24, 50)]);
      });
    });

    describe("Dafalgan", () => {
      it("should decrease the benefit and expiresIn", () => {
        expect(
          new Pharmacy([new Drug("Dafalgan", 2, 3)]).updateBenefitValue()
        ).toEqual([new Drug("Dafalgan", 1, 1)]);
      });

      it("should decrease benefit by 2 and expiresIn", () => {
        expect(
          new Pharmacy([new Drug("Dafalgan", 0, 3)]).updateBenefitValue()
        ).toEqual([new Drug("Dafalgan", -1, 0)]);
      });

      it("should not change benefit", () => {
        expect(
          new Pharmacy([new Drug("Dafalgan", 5, 0)]).updateBenefitValue()
        ).toEqual([new Drug("Dafalgan", 4, 0)]);
      });
    });
  });
});
