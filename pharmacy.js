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
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      const currentDrug = this.drugs[i];

      if (currentDrug.isDegradable()) {
        if (currentDrug.benefit > 0) {
          if (currentDrug.isMagic()) {
            if(currentDrug.name === "Dafalgan") {
              currentDrug.decreaseBenefitBy(2);
            }
            else {
              currentDrug.decreaseBenefitBy(1)
            }
          }
        }
      } else {
        if (currentDrug.isNotMaximumBenefit()) {
          currentDrug.increaseBenefitBy(1);
          if (currentDrug.name == "Fervex") {
            if (currentDrug.expiresIn < 11) {
              if (currentDrug.isNotMaximumBenefit()) {
                currentDrug.increaseBenefitBy(1);
              }
            }
            if (currentDrug.expiresIn < 6) {
              if (currentDrug.isNotMaximumBenefit()) {
                currentDrug.increaseBenefitBy(1);
              }
            }
          }
        }
      }
      if (!currentDrug.isMagic()) {
        currentDrug.decreaseLifeSpan();
      }
      if (currentDrug.expiresIn < 0) {
        if (currentDrug.name != "Herbal Tea") {
          if (currentDrug.name != "Fervex") {
            if (currentDrug.benefit > 0) {
              if (currentDrug.isMagic()) {
                if(currentDrug.name === "Dafalgan") {
                  currentDrug.decreaseBenefitBy(2);
                }
                else {
                  currentDrug.decreaseBenefitBy(1)
                }
              }
            }
          } else {
            currentDrug.decreaseBenefitBy(currentDrug.benefit);
          }
        } else {
          if (currentDrug.isNotMaximumBenefit()) {
            currentDrug.increaseBenefitBy(1);
          }
        }
      }
    }

    return this.drugs;
  }
}
