import { Drug, HerbalTea, MagicPill, Fervex, Dafalgan, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("this.drug should be an empty array", () => {
    expect(new Pharmacy().drugs).toEqual([])
  });
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug({name:"test",expiresIn: 2,benefit: 3})]).updateBenefitValue()).toEqual(
      [new Drug({name:"test",expiresIn: 1,benefit: 2})]
    );
  });
  it("should handle multiple drugs", () => {
    expect(new Pharmacy([new Drug({name:"test",expiresIn: 2,benefit: 3}), new HerbalTea({expiresIn: 10,benefit: 5}), new Fervex({expiresIn: 16,benefit: 40}), new MagicPill({expiresIn: 15,benefit: 40}), new Dafalgan({expiresIn: -2,benefit: 40})]).updateBenefitValue()).toEqual(
      [new Drug({name:"test",expiresIn: 1,benefit: 2}), new HerbalTea({expiresIn: 9,benefit: 6}), new Fervex({expiresIn: 15,benefit: 41}), new MagicPill({expiresIn: 15,benefit: 40}), new Dafalgan({expiresIn: -3,benefit: 36})]
    );
  });
});

describe("Drug", () => {
  it("should be named drug", () => {
    expect(new Drug({expiresIn: 2,benefit: 3}).name).toEqual(
      "drug"
    );
  });
  it("this.benefitAging should be equal -1", () => {
    expect(new Drug({expiresIn: 2,benefit: 3}).benefitAging).toEqual(
      -1
    );
  });
  it("benefitAgingWhenExpired should be equal -2;", () => {
    expect(new Drug({expiresIn: 2,benefit: 3}).benefitAgingWhenExpired).toEqual(
      -2
    );
  });
  it("this.expirationDateAging should be equal -1;", () => {
    expect(new Drug({expiresIn: 2,benefit: 3}).expirationDateAging).toEqual(
      -1
    );
  });

  const genericDrug = new Drug({expiresIn: 2,benefit: 3})
  it("updateBenefit() should decrease the benefit by one", () => {
    expect(genericDrug.updateBenefit(genericDrug.benefitAging)).toEqual(
      2
    );
  });
  it("updateBenefit() should decrease the benefit by two when expired", () => {
    expect(genericDrug.updateBenefit(genericDrug.benefitAgingWhenExpired)).toEqual(
      1
    );
  });

  it("updateExpiresIn() should decrease the expiresIn", () => {
    expect(new Drug({expiresIn: 2,benefit: 3}).updateExpiresIn()).toEqual(
      1
    );
  });
  it("validateBenefit() should validate the benefit for negative value", () => {
    expect(new Drug({expiresIn: 2,benefit: -23}).validateBenefit()).toEqual(
      0
    );
  });
  it("validateBenefit() should validate the benefit for positive value", () => {
    expect(new Drug({expiresIn: 2,benefit: 68}).validateBenefit()).toEqual(
      50
    );
  });
  it("isExpired() should return true", () => {
    expect(new Drug({expiresIn: -2,benefit: 3}).isExpired()).toEqual(
      true
    );
  });
  it("handleAging() should decrease the benefit and expiresIn by one", () => {
    const test = new Drug({expiresIn: 2,benefit: 3})
    test.handleAging();
    expect(test.benefit).toEqual(
      2
    );
    expect(test.expiresIn).toEqual(
      1
    );
  });
  it("handleAging() should decrease the benefit by two and expiresIn by one", () => {
    const test = new Drug({expiresIn: -2,benefit: 3})
    test.handleAging();
    expect(test.benefit).toEqual(
      1
    );
    expect(test.expiresIn).toEqual(
      -3
    );
  });
});

describe("HerbalTea", () => {
  it("should be named Herbal Tea", () => {
    expect(new HerbalTea({expiresIn: 2,benefit: 3}).name).toEqual(
      "Herbal Tea"
    );
  });
  it("this.benefitAging should be equal 1", () => {
    expect(new HerbalTea({expiresIn: 2,benefit: 3}).benefitAging).toEqual(
      1
    );
  });
  it("benefitAgingWhenExpired should be equal 2;", () => {
    expect(new HerbalTea({expiresIn: 2,benefit: 3}).benefitAgingWhenExpired).toEqual(
      2
    );
  });
  it("this.expirationDateAging should be equal -1;", () => {
    expect(new HerbalTea({expiresIn: 2,benefit: 3}).expirationDateAging).toEqual(
      -1
    );
  });

  const herbalTea = new HerbalTea({expiresIn: 2,benefit: 3})
  it("updateBenefit() should increase benefit by one", () => {
    expect(herbalTea.updateBenefit(herbalTea.benefitAging)).toEqual(
      4
    );
  });
  it("updateBenefit() should increase benefit by two when expired", () => {
    expect(herbalTea.updateBenefit(herbalTea.benefitAgingWhenExpired)).toEqual(
      5
    );
  });

  it("updateExpiresIn() should decrease the expiresIn", () => {
    expect(new HerbalTea({expiresIn: 2,benefit: 3}).updateExpiresIn()).toEqual(
      1
    );
  });
  it("validateBenefit() should validate the benefit for negative value", () => {
    expect(new HerbalTea({expiresIn: 2,benefit: -23}).validateBenefit()).toEqual(
      0
    );
  });
  it("validateBenefit() should validate the benefit for positive value", () => {
    expect(new HerbalTea({expiresIn: 2,benefit: 68}).validateBenefit()).toEqual(
      50
    );
  });
  it("isExpired() should return true", () => {
    expect(new HerbalTea({expiresIn: -2,benefit: 3}).isExpired()).toEqual(
      true
    );
  });
  it("handleAging() should increase the benefit by one and decrease expiresIn by one", () => {
    const test = new HerbalTea({expiresIn: 2,benefit: 3})
    test.handleAging();
    expect(test.benefit).toEqual(
      4
    );
    expect(test.expiresIn).toEqual(
      1
    );
  });
  it("handleAging() should increase the benefit by two and decrease expiresIn by one", () => {
    const test = new HerbalTea({expiresIn: -2,benefit: 3})
    test.handleAging();
    expect(test.benefit).toEqual(
      5
    );
    expect(test.expiresIn).toEqual(
      -3
    );
  });
});

describe("MagicPill", () => {
  it("should be named Magic Pill", () => {
    expect(new MagicPill({expiresIn: 2,benefit: 3}).name).toEqual(
      "Magic Pill"
    );
  });
  it("this.benefitAging should be equal 0", () => {
    expect(new MagicPill({expiresIn: 2,benefit: 3}).benefitAging).toEqual(
      0
    );
  });
  it("benefitAgingWhenExpired should be equal 0;", () => {
    expect(new MagicPill({expiresIn: 2,benefit: 3}).benefitAgingWhenExpired).toEqual(
      0
    );
  });
  it("this.expirationDateAging should be equal 0;", () => {
    expect(new MagicPill({expiresIn: 2,benefit: 3}).expirationDateAging).toEqual(
      0
    );
  });

  const magicPill = new MagicPill({expiresIn: 2,benefit: 3})
  it("updateBenefit() should not increase benefit", () => {
    expect(magicPill.updateBenefit(magicPill.benefitAging)).toEqual(
     3
    );
  });
  it("updateBenefit() should not increase benefit when expired", () => {
    expect(magicPill.updateBenefit(magicPill.benefitAgingWhenExpired)).toEqual(
     3
    );
  });

  it("updateExpiresIn() should not decrease expiresIn", () => {
    expect(new MagicPill({expiresIn: 2,benefit: 3}).updateExpiresIn()).toEqual(
      2
    );
  });
  it("validateBenefit() should validate the benefit for negative value", () => {
    expect(new MagicPill({expiresIn: 2,benefit: -23}).validateBenefit()).toEqual(
      0
    );
  });
  it("validateBenefit() should validate the benefit for positive value", () => {
    expect(new MagicPill({expiresIn: 2,benefit: 68}).validateBenefit()).toEqual(
      50
    );
  });
  it("isExpired() should return true", () => {
    expect(new MagicPill({expiresIn: -2,benefit: 3}).isExpired()).toEqual(
      true
    );
  });
  it("handleAging() should not increase the benefit and expiresIn", () => {
    const test = new MagicPill({expiresIn: 2,benefit: 3})
    test.handleAging();
    expect(test.benefit).toEqual(
      3
    );
    expect(test.expiresIn).toEqual(
      2
    );
  });
  it("handleAging() should not increase the benefit and expiresIn", () => {
    const test = new MagicPill({expiresIn: -2,benefit: 3})
    test.handleAging();
    expect(test.benefit).toEqual(
      3
    );
    expect(test.expiresIn).toEqual(
      -2
    );
  });
});

describe("Fervex", () => {
  it("should be named Fervex", () => {
    expect(new Fervex({expiresIn: 2,benefit: 3}).name).toEqual(
      "Fervex"
    );
  });
  it("this.benefitAging should be equal 1", () => {
    expect(new Fervex({expiresIn: 2,benefit: 3}).benefitAging).toEqual(
      1
    );
  });
  it("benefitAgingWhenExpired should be equal 0", () => {
    expect(new Fervex({expiresIn: 2,benefit: 3}).benefitAgingWhenExpired).toEqual(
      0
    );
  });
  it("this.expirationDateAging should be equal -1", () => {
    expect(new Fervex({expiresIn: 2,benefit: 3}).expirationDateAging).toEqual(
      -1
    );
  });
  it("evaluateBenefitEvolution() should return 3", () => {
    expect(new Fervex({expiresIn: 2,benefit: 3}).evaluateBenefitEvolution()).toEqual(
     3
    );
  });
  it("evaluateBenefitEvolution() should return 2", () => {
    expect(new Fervex({expiresIn: 7,benefit: 3}).evaluateBenefitEvolution()).toEqual(
     2
    );
  });
  it("evaluateBenefitEvolution() should return 1", () => {
    expect(new Fervex({expiresIn: 16,benefit: 3}).evaluateBenefitEvolution()).toEqual(
     1
    );
  });

  const fervex = new Fervex({expiresIn: 16,benefit: 3})
  it("updateBenefit() should increase benefit by 1", () => {
    expect(fervex.updateBenefit(fervex.benefitAging)).toEqual(
     4
    );
  });
  it("updateBenefit() should not increase benefit when expired", () => {
    expect(fervex.updateBenefit(fervex.benefitAgingWhenExpired)).toEqual(
     3
    );
  });

  it("updateExpiresIn() should decrease expiresIn", () => {
    expect(new Fervex({expiresIn: 2,benefit: 3}).updateExpiresIn()).toEqual(
      1
    );
  });
  it("validateBenefit() should validate the benefit for negative value", () => {
    expect(new Fervex({expiresIn: 2,benefit: -23}).validateBenefit()).toEqual(
      0
    );
  });
  it("validateBenefit() should validate the benefit for positive value", () => {
    expect(new Fervex({expiresIn: 2,benefit: 68}).validateBenefit()).toEqual(
      50
    );
  });
  it("isExpired() should return true", () => {
    expect(new Fervex({expiresIn: -2,benefit: 3}).isExpired()).toEqual(
      true
    );
  });
  it("handleAging() should increase the benefit by 3 and decrease expiresIn", () => {
    const test = new Fervex({expiresIn: 2,benefit: 3})
    test.handleAging();
    expect(test.benefit).toEqual(
      6
    );
    expect(test.expiresIn).toEqual(
      1
    );
  });
  it("handleAging() should increase the benefit by 2 and decrease expiresIn", () => {
    const test = new Fervex({expiresIn: 7,benefit: 3})
    test.handleAging();
    expect(test.benefit).toEqual(
      5
    );
    expect(test.expiresIn).toEqual(
      6
    );
  });
  it("handleAging() should increase the benefit by 1 and decrease expiresIn", () => {
    const test = new Fervex({expiresIn: 16,benefit: 3})
    test.handleAging();
    expect(test.benefit).toEqual(
      4
    );
    expect(test.expiresIn).toEqual(
      15
    );
  });
  it("handleAging() should not increase the benefit and decrease expiresIn", () => {
    const test = new Fervex({expiresIn: -2,benefit: 3})
    test.handleAging();
    expect(test.benefit).toEqual(
      3
    );
    expect(test.expiresIn).toEqual(
      -3
    );
  });
});

describe("Dafalgan", () => {
  it("should be named Dafalgan", () => {
    expect(new Dafalgan({expiresIn: 2,benefit: 3}).name).toEqual(
      "Dafalgan"
    );
  });
  it("this.benefitAging should be equal -2", () => {
    expect(new Dafalgan({expiresIn: 2,benefit: 3}).benefitAging).toEqual(
      -2
    );
  });
  it("benefitAgingWhenExpired should be equal -4", () => {
    expect(new Dafalgan({expiresIn: 2,benefit: 3}).benefitAgingWhenExpired).toEqual(
      -4
    );
  });
  it("this.expirationDateAging should be equal -1", () => {
    expect(new Dafalgan({expiresIn: 2,benefit: 3}).expirationDateAging).toEqual(
      -1
    );
  });

  const dafalgan = new Dafalgan({expiresIn: 2,benefit: 10})
  it("updateBenefit() should decrese benefit by 2", () => {
    expect(dafalgan.updateBenefit(dafalgan.benefitAging)).toEqual(
     8
    );
  });
  it("updateBenefit() should decrese benefit by 4 when expired", () => {
    expect(dafalgan.updateBenefit(dafalgan.benefitAgingWhenExpired)).toEqual(
     6
    );
  });

  it("updateExpiresIn() should decrease expiresIn", () => {
    expect(new Dafalgan({expiresIn: 2,benefit: 3}).updateExpiresIn()).toEqual(
      1
    );
  });
  it("validateBenefit() should validate the benefit for negative value", () => {
    expect(new Dafalgan({expiresIn: 2,benefit: -23}).validateBenefit()).toEqual(
      0
    );
  });
  it("validateBenefit() should validate the benefit for positive value", () => {
    expect(new Dafalgan({expiresIn: 2,benefit: 68}).validateBenefit()).toEqual(
      50
    );
  });
  it("isExpired() should return true", () => {
    expect(new Dafalgan({expiresIn: -2,benefit: 3}).isExpired()).toEqual(
      true
    );
  });
  it("handleAging() should decrease the benefit by two and expiresIn by one", () => {
    const test = new Dafalgan({expiresIn: 2,benefit: 3})
    test.handleAging();
    expect(test.benefit).toEqual(
      1
    );
    expect(test.expiresIn).toEqual(
      1
    );
  });
  it("handleAging() should decrease the benefit by four and expiresIn by one", () => {
    const test = new Dafalgan({expiresIn: -2,benefit: 6})
    test.handleAging();
    expect(test.benefit).toEqual(
      2
    );
    expect(test.expiresIn).toEqual(
      -3
    );
  });
});