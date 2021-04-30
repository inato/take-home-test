import { Pharmacy } from "./pharmacy";
import { Doliprane, Drug, Fervex, HerbalTea, MagicPill } from "./drugs";

class FooDrug extends Drug {
  constructor(expiresIn, benefit) {
    super("FooDrug", expiresIn, benefit);
  }
}

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn at the end of each day", () => {
    expect(new Pharmacy([new FooDrug(2, 3)]).updateBenefitValue()).toEqual([
      new FooDrug(1, 2)
    ]);
  });

  it("should match snapshot", () => {
    const drugs = [
      new Doliprane(20, 30),
      new HerbalTea(10, 5),
      new Fervex(5, 40),
      new MagicPill(15, 40)
    ];
    const pharmacy = new Pharmacy(drugs);

    let result;
    for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
      result = pharmacy.updateBenefitValue();
    }

    expect(result).toMatchSnapshot();
  });

  it("should not be possible to create a drug with less than 0 or more than 50 benefit", () => {
    try {
      new FooDrug(10, -1);
    } catch (error) {
      expect(error.message).toEqual(
        "a drug benefit value can only be between 0 and 50"
      );
    }

    try {
      new FooDrug(10, 51);
    } catch (error) {
      expect(error.message).toEqual(
        "a drug benefit value can only be between 0 and 50"
      );
    }
  });

  it("should degrade benefit twice as fast once the expiration date has passed", () => {
    const expiresIn = 5;
    const pharmacy = new Pharmacy([new FooDrug(expiresIn, 50)]);

    let drugs;
    for (let i = expiresIn; i > 0; i--) {
      drugs = pharmacy.updateBenefitValue();
    }
    let fooDrug = drugs[0];

    expect(fooDrug.benefit).toEqual(45);
    expect(fooDrug.expiresIn).toEqual(0);

    for (let i = 0; i < 5; i++) {
      drugs = pharmacy.updateBenefitValue();
    }
    fooDrug = drugs[0];
    expect(fooDrug.benefit).toEqual(35);
    expect(fooDrug.expiresIn).toEqual(-5);
  });

  it("should not decrease a drug benefit below 0", () => {
    const expiresIn = 5;
    const pharmacy = new Pharmacy([new FooDrug(expiresIn, 0)]);

    let drugs;
    for (let i = expiresIn; i > -5; i--) {
      drugs = pharmacy.updateBenefitValue();
    }

    const fooDrug = drugs[0];

    expect(fooDrug.benefit).toEqual(0);
    expect(fooDrug.expiresIn).toEqual(-5);
  });

  it("should not increase a drug benefit above 50", () => {
    const expiresIn = 5;
    const benefit = 50;
    const pharmacy = new Pharmacy([new HerbalTea(expiresIn, benefit)]);

    let drugs;
    for (let i = expiresIn; i > 0; i--) {
      drugs = pharmacy.updateBenefitValue();
    }
    const herbalTea = drugs[0];
    expect(herbalTea.expiresIn).toEqual(0);
    expect(herbalTea.benefit).toEqual(benefit);
  });

  it("should increase herbal tea benefit twice as fast after the expiration date", () => {
    const expiresIn = 5;
    const pharmacy = new Pharmacy([new HerbalTea(expiresIn, 0)]);

    let drugs;
    for (let i = expiresIn; i > -5; i--) {
      drugs = pharmacy.updateBenefitValue();
    }

    const herbalTea = drugs[0];

    expect(herbalTea.benefit).toEqual(15);
    expect(herbalTea.expiresIn).toEqual(-5);
  });

  it("should not make magic pill expire", () => {
    const expiresIn = 123;
    const benefit = 10;
    const pharmacy = new Pharmacy([new MagicPill(expiresIn, benefit)]);

    const drugs = pharmacy.updateBenefitValue();
    const magicPill = drugs[0];

    expect(magicPill.expiresIn).toEqual(expiresIn);
    expect(magicPill.benefit).toEqual(benefit);
  });

  it("should not decrease magic pill benefit", () => {
    const pharmacy = new Pharmacy([new MagicPill(5, 10)]);
    pharmacy.updateBenefitValue();
    const magicPill = pharmacy.updateBenefitValue()[0];
    expect(magicPill.benefit).toEqual(10);
  });

  it("should increase fervex benefit by 2 when there are 10 days or less remaining", () => {
    const expiresIn = 10;
    const pharmacy = new Pharmacy([new Fervex(expiresIn, 0)]);

    let drugs;
    for (let i = expiresIn; i > 5; i--) {
      drugs = pharmacy.updateBenefitValue();
    }

    const fervex = drugs[0];

    expect(fervex.benefit).toEqual(10);
  });

  it("should increase fervex benefit by 3 when there are 5 days or less remaining", () => {
    const expiresIn = 5;
    const pharmacy = new Pharmacy([new Fervex(expiresIn, 0)]);

    let drugs;
    for (let i = expiresIn; i > 0; i--) {
      drugs = pharmacy.updateBenefitValue();
    }

    const fervex = drugs[0];

    expect(fervex.benefit).toEqual(15);
  });

  it("should set fervex benefit to 0 when it expires", () => {
    const pharmacy = new Pharmacy([new Fervex(0, 50)]);
    const fervex = pharmacy.updateBenefitValue()[0];

    expect(fervex.benefit).toEqual(0);
  });
});
