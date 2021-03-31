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

    let d, v;
    for (let { gte, lt, delta, value } of expiresInDelta) {
      if (this.expiresIn >= gte && this.expiresIn < lt) {
        if (typeof delta === "number") {
          d = delta;
        } else if (typeof value === "number") {
          v = value;
        }
      }
    }
    this.expiresIn = typeof v === "number" ? v : this.expiresIn + d;
  }

  updateBenefit() {
    const { benefitDelta } = this.config;

    let d, v;
    for (let { gte, lt, delta, value } of benefitDelta) {
      if (this.expiresIn >= gte && this.expiresIn < lt) {
        if (typeof delta === "number") {
          d = delta;
        } else if (typeof value === "number") {
          v = value;
        }
      }
    }
    const calculatedBenefit = typeof v === "number" ? v : this.benefit + d;
    this.benefit = this.getBenefitInRange(calculatedBenefit);
  }
}
