export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  expiresOneDay() {
    this.expiresIn -= 1;
  }

  calcExpirationDays() {
    // Once the expiration date has passed, Benefit degrades twice as fast.
    const expirationDays = this.expiresIn > 0 ? 1 : 2;
    return expirationDays;
  }

  applyBenefitRules() {
    // The Benefit of an item is never more than 50.
    if (this.benefit > 50) {
      this.benefit = 50;
    }
    // The Benefit of an item is never negative
    if (this.benefit < 0) {
      this.benefit = 0;
    }
  }

  calcNewBenefit() {
    const expirationDays = this.calcExpirationDays();
    // At the end of each day our system lowers both values for every drug
    this.benefit = this.benefit - expirationDays;
  }

  updateBenefitValue() {
    this.expiresOneDay();
    this.calcNewBenefit();
    this.applyBenefitRules();
  }
}

export class HerbalTea extends Drug {}
