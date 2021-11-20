export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  decreaseBenefitBy(rate) {
    const newBenefit = this.benefit - rate;
    this.benefit = newBenefit >= 0 ? newBenefit : 0;
  }

  increaseBenefitBy(rate) {
    const newBenefit = this.benefit + rate;
    this.benefit = newBenefit <= 50 ? newBenefit : 50;
  }

  handleDegradation() {
    if (this.benefit > 0 && this.isDegradable() && !this.isMagic()) {
        this.name === "Dafalgan"
          ? this.decreaseBenefitBy(2)
          : this.decreaseBenefitBy(1);
    }
  }

  handleImprovement() {
    if (!this.isDegradable() && this.isNotMaximumBenefit()) {
      this.increaseBenefitBy(1);

      if (this.name === "Fervex") {
        this.expiresIn < 11 && this.increaseBenefitBy(1);
        this.expiresIn < 6 && this.increaseBenefitBy(1);
      }
    }
  }

  handleExpiry() {
    if (this.expiresIn < 0) {
      if (this.name == "Herbal Tea") this.increaseBenefitBy(1);
      if (this.name == "Fervex") this.decreaseBenefitBy(this.benefit);

      this.handleDegradation();
    }
  }

  decreaseLifeSpan() {
    if (!this.isMagic()) {
      this.expiresIn -= 1;
    }
  }

  isNotMaximumBenefit() {
    return this.benefit < 50;
  }

  isDegradable() {
    return this.name != "Herbal Tea" && this.name != "Fervex";
  }

  isMagic() {
    return this.name == "Magic Pill";
  }

  handleExpiryRound() {
    this.handleDegradation();
    this.handleImprovement();
    this.decreaseLifeSpan();
    this.handleExpiry();
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    this.drugs.forEach(drug => drug.handleExpiryRound());
    return this.drugs;
  }
}
