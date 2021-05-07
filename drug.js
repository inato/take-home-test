export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
    // Factory method - overwrites default behavior
    if (name === "Herbal Tea") {
      Object.assign(this, HerbalTea);
    } else if (name === "Fervex") {
      Object.assign(this, Fervex);
    } else if (name === "Magic Pill") {
      Object.assign(this, MagicPill);
    } else if (name === "Dafalgan") {
      Object.assign(this, Dafalgan);
    }
  }

  expiresOneDay() {
    this.expiresIn -= 1;
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
    // Once the expiration date has passed, Benefit degrades twice as fast.
    const expirationFactor = this.expiresIn >= 0 ? 1 : 2;
    // At the end of each day our system lowers both values for every drug
    this.benefit = this.benefit - expirationFactor;
  }

  updateBenefitValue() {
    this.expiresOneDay();
    this.calcNewBenefit();
    this.applyBenefitRules();
  }
}

// "Herbal Tea" actually increases in Benefit the older it gets.
// Benefit increases twice as fast after the expiration date.
const HerbalTea = {
  calcNewBenefit() {
    const expirationFactor = this.expiresIn < 0 ? 2 : 1;
    this.benefit = this.benefit + expirationFactor;
  }
};

// "Magic Pill" never expires nor decreases in Benefit.
const MagicPill = {
  expiresOneDay() {},
  calcNewBenefit() {}
};

// "Fervex", like Herbal Tea, increases in Benefit as its expiration date approaches.
// Benefit increases by 2 when there are 10 days or less
// and by 3 when there are 5 days or less but Benefit drops to 0 after the expiration date.
const Fervex = {
  calcNewBenefit() {
    if (this.expiresIn < 0) {
      this.benefit = 0;
    } else if (this.expiresIn <= 5) {
      this.benefit = this.benefit + 3;
    } else if (this.expiresIn <= 10) {
      this.benefit = this.benefit + 2;
    } else {
      this.benefit = this.benefit + 1;
    }
  }
};

// "Dafalgan" degrades in Benefit twice as fast as normal drugs.
const Dafalgan = {
  calcNewBenefit() {
    // Once the expiration date has passed, Benefit degrades twice as fast.
    const expirationFactor = (this.expiresIn >= 0 ? 1 : 2) * 2;
    // At the end of each day our system lowers both values for every drug
    this.benefit = this.benefit - expirationFactor;
  }
};
