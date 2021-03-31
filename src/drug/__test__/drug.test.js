import { Drug } from "../drug";

describe("Drug", () => {
  describe("benefit", () => {
    describe("constructor", () => {
      it("should initalize expiresIn and benefit values correctly", () => {
        const { expiresIn, benefit } = new Drug("xxx", 20, 10);

        expect(expiresIn).toEqual(20);
        expect(benefit).toEqual(10);
      });

      it("should initalize with correct config for regular drug", () => {
        const { config } = new Drug("xxx", 20, 10);

        expect(config.name).toEqual("regular");
      });

      it("should initalize with correct config", () => {
        const herbalTea = new Drug("Herbal Tea", 20, 10);
        const magicPill = new Drug("Magic Pill", 20, 10);
        const fervex = new Drug("Fervex", 20, 10);
        const dafalgan = new Drug("Dafalgan", 20, 10);

        expect(herbalTea.config.name).toEqual("Herbal Tea");
        expect(magicPill.config.name).toEqual("Magic Pill");
        expect(fervex.config.name).toEqual("Fervex");
        expect(dafalgan.config.name).toEqual("Dafalgan");
      });

      it("should not initialize benefit value > 50", () => {
        const drug = new Drug("Herbal Tea", 20, 100);

        expect(drug.benefit).toEqual(50);
      });
      it("should not initialize benefit value < 0", () => {
        const drug = new Drug("Herbal Tea", 20, -10);

        expect(drug.benefit).toEqual(0);
      });

      it("should not set benefit value > 50", () => {
        const drug = new Drug("Herbal Tea", 20, 100);
        drug.updateBenefit();

        expect(drug.benefit).toEqual(50);
      });

      it("should not set benefit value < 0", () => {
        const drug = new Drug("xxx", -1, 0);
        drug.updateBenefit();

        expect(drug.benefit).toEqual(0);
      });
    });

    describe("updateBenefit", () => {
      describe("regular drug", () => {
        it("should decrease benefit by 1 when expiresIn is > 0", () => {
          const drug = new Drug("regular", 20, 10);
          drug.updateBenefit();

          expect(drug.benefit).toEqual(9);
        });

        it("should decrease benefit by 1 when expiresIn = 0", () => {
          const drug = new Drug("regular", 0, 10);
          drug.updateBenefit();

          expect(drug.benefit).toEqual(9);
        });

        it("should decrease benefit by 2 when expiresIn < 0", () => {
          const drug = new Drug("regular", -1, 10);
          drug.updateBenefit();

          expect(drug.benefit).toEqual(8);
        });
      });

      describe("Herbal Tea drug", () => {
        it("should increase benefit by 1 when expiresIn > 0", () => {
          const drug = new Drug("Herbal Tea", 20, 10);
          drug.updateBenefit();

          expect(drug.benefit).toEqual(11);
        });
        it("should increase benefit by 1 when expiresIn = 0", () => {
          const drug = new Drug("Herbal Tea", 0, 10);
          drug.updateBenefit();

          expect(drug.benefit).toEqual(11);
        });
        it("should increase benefit by 2 when expiresIn < 0", () => {
          const drug = new Drug("Herbal Tea", -1, 10);
          drug.updateBenefit();

          expect(drug.benefit).toEqual(12);
        });
      });

      describe("Magic Pill drug", () => {
        it("should keep same benefit when expiresIn > 0", () => {
          const drug = new Drug("Magic Pill", 20, 10);
          drug.updateBenefit();

          expect(drug.benefit).toEqual(10);
        });
        it("should keep same benefit when expiresIn = 0", () => {
          const drug = new Drug("Magic Pill", 0, 10);
          drug.updateBenefit();

          expect(drug.benefit).toEqual(10);
        });
        it("should keep same benefit when expiresIn < 0", () => {
          const drug = new Drug("Magic Pill", -1, 10);
          drug.updateBenefit();

          expect(drug.benefit).toEqual(10);
        });
      });

      describe("Fervex drug", () => {
        it("should increase benefit by 1 when expiresIn > 10", () => {
          const drug = new Drug("Fervex", 20, 10);
          drug.updateBenefit();

          expect(drug.benefit).toEqual(11);
        });

        it("should increase benefit by 2 when expiresIn is between ]5, 10] => case 10", () => {
          const drug = new Drug("Fervex", 10, 10);
          drug.updateBenefit();

          expect(drug.benefit).toEqual(12);
        });

        it("should increase benefit by 2 when expiresIn is between ]5, 10] => case 6", () => {
          const drug = new Drug("Fervex", 6, 10);
          drug.updateBenefit();

          expect(drug.benefit).toEqual(12);
        });

        it("should increase benefit by 3 when expiresIn is between [0, 5] => case 5", () => {
          const drug = new Drug("Fervex", 5, 10);
          drug.updateBenefit();

          expect(drug.benefit).toEqual(13);
        });

        it("should increase benefit by 3 when expiresIn is between [0, 5] => case 0", () => {
          const drug = new Drug("Fervex", 0, 10);
          drug.updateBenefit();

          expect(drug.benefit).toEqual(13);
        });

        it("should set benefit to 0 when expiresIn is negative", () => {
          const drug = new Drug("Fervex", -1, 10);
          drug.updateBenefit();

          expect(drug.benefit).toEqual(0);
        });
      });
      describe("Dafalgan drug", () => {
        it("should decrease benefit by 2 when expiresIn is > 0", () => {
          const drug = new Drug("Dafalgan", 1, 10);
          drug.updateBenefit();

          expect(drug.benefit).toEqual(8);
        });
        it("should decrease benefit by 2 when expiresIn is = 0", () => {
          const drug = new Drug("Dafalgan", 0, 10);
          drug.updateBenefit();

          expect(drug.benefit).toEqual(8);
        });
        it("should decrease benefit by 4 when expiresIn is < 0", () => {
          const drug = new Drug("Dafalgan", -1, 10);
          drug.updateBenefit();

          expect(drug.benefit).toEqual(6);
        });
      });
    });
  });
  describe("expiresIn", () => {
    describe("constructor", () => {
      it("should initalize expiresIn correctly", () => {
        const { expiresIn } = new Drug("xxx", 20, 10);

        expect(expiresIn).toEqual(20);
      });
    });
    describe("updateExpiresIn", () => {
      describe("regular drug", () => {
        it("should decrease expiresIn by 1 when previous value is >= 0", () => {
          const drug = new Drug("xxx", 20, 10);
          drug.updateExpiresIn();

          expect(drug.expiresIn).toEqual(19);
        });
        it("should decrease expiresIn by 1 when previous value is < 0", () => {
          const drug = new Drug("xxx", 0, 10);
          drug.updateExpiresIn();

          expect(drug.expiresIn).toEqual(-1);
        });
      });
      describe("Herbal Tea drug", () => {
        it("should decrease expiresIn by 1", () => {
          const drug = new Drug("Herbal Tea", 20, 10);
          drug.updateExpiresIn();

          expect(drug.expiresIn).toEqual(19);
        });
      });
      describe("Magic Pill drug", () => {
        it("should never decrease expiresIn for Magic pill", () => {
          const drug = new Drug("Magic Pill", 20, 10);
          drug.updateExpiresIn();

          expect(drug.expiresIn).toEqual(20);
        });
      });
      describe("Fervex drug", () => {
        it("should decrease expiresIn by 1", () => {
          const drug = new Drug("Fervex", 20, 10);
          drug.updateExpiresIn();

          expect(drug.expiresIn).toEqual(19);
        });
      });
      describe("Dafalgan Tea drug", () => {
        it("should decrease expiresIn by 1", () => {
          const drug = new Drug("Dafalgan", 20, 10);
          drug.updateExpiresIn();

          expect(drug.expiresIn).toEqual(19);
        });
      });
    });
  });
  describe("update", () => {
    it("should call expiresIn and updateBenefit", () => {
      const drug = new Drug("xxx", 20, 10);
      const updateExpiresIn = jest.spyOn(drug, "updateExpiresIn");
      const updateBenefit = jest.spyOn(drug, "updateBenefit");
      drug.update();

      expect(updateExpiresIn).toHaveBeenCalledTimes(1);
      expect(updateBenefit).toHaveBeenCalledTimes(1);
    });
  });
});
