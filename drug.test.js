import { Drug } from "./drug";

let drug;

describe("Drug", () => {
  describe("Properties", () => {
    beforeEach(() => {
      drug = new Drug("test", 2, 3);
    });

    it("should have an expiresIn property", () => {
      expect(drug).toHaveProperty("expiresIn");
    });

    it("should have a benefit property", () => {
      expect(drug).toHaveProperty("benefit");
    });
  });

  describe("updateBenefitValueAndExpiration", () => {
    describe("Basic drugs", () => {
      it("should decrease expiration by 1", () => {
        drug = new Drug("test", 8, 10);

        drug.updateBenefitValueAndExpiration();

        expect(drug.expiresIn).toBe(7);
      });

      it("should decrease benefit by 1 before the expiration date has passed", () => {
        drug = new Drug("test", 8, 10);

        drug.updateBenefitValueAndExpiration();

        expect(drug.benefit).toBe(9);
      });

      it("should decrease benefit by 2 once the expiration date has passed", () => {
        drug = new Drug("test", -1, 10);

        drug.updateBenefitValueAndExpiration();

        expect(drug.benefit).toBe(8);
      });

      it("should never have a negative benefit", () => {
        drug = new Drug("test", 2, 0);

        drug.updateBenefitValueAndExpiration();

        expect(drug.benefit).toBeGreaterThanOrEqual(0);
      });
    });

    describe("Herbal Tea drug", () => {
      it("should decrease expiration by 1", () => {
        drug = new Drug("Herbal Tea", 2, 3);

        drug.updateBenefitValueAndExpiration();

        expect(drug.expiresIn).toBe(1);
      });

      it("should increase the benefit by 1 before the expiration date has passed", () => {
        drug = new Drug("Herbal Tea", 2, 3);

        drug.updateBenefitValueAndExpiration();

        expect(drug.benefit).toBe(4);
      });

      it("should increase the benefit by 2 once the expiration date has passed", () => {
        drug = new Drug("Herbal Tea", -1, 3);

        drug.updateBenefitValueAndExpiration();

        expect(drug.benefit).toBe(5);
      });

      it("should never have a benefit higher than 50", () => {
        drug = new Drug("Herbal Tea", -1, 50);

        drug.updateBenefitValueAndExpiration();

        expect(drug.benefit).toBeLessThanOrEqual(50);
      });
    });

    describe("Magic Pill drug", () => {
      it("should not expire", () => {
        drug = new Drug("Magic Pill", 2, 3);

        drug.updateBenefitValueAndExpiration();

        expect(drug.expiresIn).toBe(2);
      });

      it("should not change its benefit", () => {
        drug = new Drug("Magic Pill", 2, 3);

        drug.updateBenefitValueAndExpiration();

        expect(drug.benefit).toBe(3);
      });
    });

    describe("Fervex drug", () => {
      it("should decrease expiration by 1", () => {
        drug = new Drug("Fervex", 2, 3);

        drug.updateBenefitValueAndExpiration();

        expect(drug.expiresIn).toBe(1);
      });

      it("should increase the benefit by 1 when there are more than 10 days before the expiration date", () => {
        drug = new Drug("Fervex", 11, 3);

        drug.updateBenefitValueAndExpiration();

        expect(drug.benefit).toBe(4);
      });

      Array.from({ length: 5 })
        .map((_, i) => 10 - i)
        .forEach((numberOfDays) => {
          it(`should increase the benefit by 2 when there are ${numberOfDays} days before the expiration date has passed`, () => {
            drug = new Drug("Fervex", 10, 3);

            drug.updateBenefitValueAndExpiration();

            expect(drug.benefit).toBe(5);
          });
        });

      Array.from({ length: 5 })
        .map((_, i) => 5 - i)
        .forEach((numberOfDays) => {
          it(`should increase the benefit by 3 when there are ${numberOfDays} days before the expiration date has passed`, () => {
            drug = new Drug("Fervex", 5, 3);

            drug.updateBenefitValueAndExpiration();

            expect(drug.benefit).toBe(6);
          });
        });

      it(`should have no benefit when the expiration date has passed`, () => {
        drug = new Drug("Fervex", -1, 3);

        drug.updateBenefitValueAndExpiration();

        expect(drug.benefit).toBe(0);
      });

      it("should never have a benefit higher than 50", () => {
        drug = new Drug("Fervex", 2, 50);

        drug.updateBenefitValueAndExpiration();

        expect(drug.benefit).toBeLessThanOrEqual(50);
      });
    });

    describe("Dafalgan drug", () => {
      it("should never have a negative benefit", () => {
        drug = new Drug("Dafalgan", 2, 0);

        drug.updateBenefitValueAndExpiration();

        expect(drug.benefit).toBeGreaterThanOrEqual(0);
      });

      it("should decrease expiration by 1", () => {
        drug = new Drug("Dafalgan", 8, 10);

        drug.updateBenefitValueAndExpiration();

        expect(drug.expiresIn).toBe(7);
      });

      it("should decrease benefit by 2 before the expiration date has passed", () => {
        drug = new Drug("Dafalgan", 8, 10);

        drug.updateBenefitValueAndExpiration();

        expect(drug.benefit).toBe(8);
      });

      it("should decrease benefit by 4 once the expiration date has passed", () => {
        drug = new Drug("Dafalgan", -1, 10);

        drug.updateBenefitValueAndExpiration();

        expect(drug.benefit).toBe(6);
      });
    });
  });
});
