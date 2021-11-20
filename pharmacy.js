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
      if (
        this.drugs[i].name != "Herbal Tea" &&
        this.drugs[i].name != "Fervex"
      ) {
        if (this.drugs[i].benefit > 0) {
          if (this.drugs[i].name != "Magic Pill") {
            if(this.drugs[i].name === "Dafalgan") {
              this.drugs[i].benefit = this.drugs[i].benefit - 2;
            }
            else {
              this.drugs[i].benefit = this.drugs[i].benefit - 1;
            }
          }
        }
      } else {
        if (this.drugs[i].benefit < 50) {
          this.drugs[i].benefit = this.drugs[i].benefit + 1;
          if (this.drugs[i].name == "Fervex") {
            if (this.drugs[i].expiresIn < 11) {
              if (this.drugs[i].benefit < 50) {
                this.drugs[i].benefit = this.drugs[i].benefit + 1;
              }
            }
            if (this.drugs[i].expiresIn < 6) {
              if (this.drugs[i].benefit < 50) {
                this.drugs[i].benefit = this.drugs[i].benefit + 1;
              }
            }
          }
        }
      }
      if (this.drugs[i].name != "Magic Pill") {
        this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
      }
      if (this.drugs[i].expiresIn < 0) {
        if (this.drugs[i].name != "Herbal Tea") {
          if (this.drugs[i].name != "Fervex") {
            if (this.drugs[i].benefit > 0) {
              if (this.drugs[i].name != "Magic Pill") {
                if(this.drugs[i].name === "Dafalgan") {
                  this.drugs[i].benefit = this.drugs[i].benefit - 2;
                }
                else {
                  this.drugs[i].benefit = this.drugs[i].benefit - 1;
                }
              }
            }
          } else {
            this.drugs[i].benefit =
              this.drugs[i].benefit - this.drugs[i].benefit;
          }
        } else {
          if (this.drugs[i].benefit < 50) {
            this.drugs[i].benefit = this.drugs[i].benefit + 1;
          }
        }
      }
    }

    return this.drugs;
  }
}
