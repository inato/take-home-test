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
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  handleDegradation(drug) {
    if (drug.isDegradable() && !drug.isMagic()) {
      if (drug.benefit > 0) {
        drug.name === "Dafalgan"
          ? drug.decreaseBenefitBy(2)
          : drug.decreaseBenefitBy(1);
      }
    }
  }

  handleImprovement(drug) {
    if (!drug.isDegradable() && drug.isNotMaximumBenefit()) {
      drug.increaseBenefitBy(1);

      if (drug.name === "Fervex") {
        drug.expiresIn < 11 && drug.increaseBenefitBy(1);
        drug.expiresIn < 6 && drug.increaseBenefitBy(1);
      }
    }
  }

  handleExpiry(drug) {
    if (drug.expiresIn < 0) {
      if (drug.name == "Herbal Tea") drug.increaseBenefitBy(1);
      if (drug.name == "Fervex") drug.decreaseBenefitBy(drug.benefit);

      if (drug.benefit > 0 && drug.isDegradable()) {
        if (drug.name == "Dafalgan") drug.decreaseBenefitBy(2);
        if (!drug.isMagic()) drug.decreaseBenefitBy(1);
      }
    }
  }

  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      const currentDrug = this.drugs[i];

      this.handleDegradation(currentDrug);
      this.handleImprovement(currentDrug);
      currentDrug.decreaseLifeSpan();
      this.handleExpiry(currentDrug);
    }

    return this.drugs;
  }
}
