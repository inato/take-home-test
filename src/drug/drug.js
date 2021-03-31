import config from "./drugConfig";
export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = this.getBenefitInRange(benefit);
    this.minBenefit = 0;
    this.maxBenefit = 50;

    let conf = config.find(drug => drug.name === name);
    if (!conf) {
      conf = config.find(drug => drug.name === "regular");
    }
    this.config = conf;
  }

  getBenefitInRange(value) {
    return Math.max(0, Math.min(value, 50));
  }

  update() {
    this.updateExpiresIn();
    this.updateBenefit();
  }

  updateExpiresIn() {
    const { expiresInDelta } = this.config;

    const { delta, value } = this.getDeltaOrValueFromRulesArray(expiresInDelta);
    this.expiresIn = typeof value === "number" ? value : this.expiresIn + delta;
  }

  updateBenefit() {
    const { benefitDelta } = this.config;

    const { delta, value } = this.getDeltaOrValueFromRulesArray(benefitDelta);
    const calculatedBenefit =
      typeof value === "number" ? value : this.benefit + delta;
    this.benefit = this.getBenefitInRange(calculatedBenefit);
  }

  getDeltaOrValueFromRulesArray(rules) {
    let d, v;
    for (let { gte, lt, delta, value } of rules) {
      if (this.expiresIn >= gte && this.expiresIn < lt) {
        if (typeof delta === "number") {
          d = delta;
        } else if (typeof value === "number") {
          v = value;
        }
      }
    }
    return { delta: d, value: v };
  }
}
