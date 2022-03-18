export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      if ( // default Benefit degrades
        this.drugs[i].name != "Herbal Tea" &&
        this.drugs[i].name != "Fervex"
      ) {
        if (this.drugs[i].benefit > 0) { // The Benefit of an item is never negative
          if (this.drugs[i].name != "Magic Pill") { // "Magic Pill" never decreases in Benefit
            this.drugs[i].benefit = this.drugs[i].benefit - 1;
          }
        }
      } else { // "Herbal Tea" || "Fervex"
        if (this.drugs[i].benefit < 50) { // The Benefit of an item is never more than 50
          this.drugs[i].benefit = this.drugs[i].benefit + 1;
          if (this.drugs[i].name == "Fervex") { // "Fervex" custom case
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

      if (this.drugs[i].name != "Magic Pill") { //for this case : "Magic Pill" never expires, default expiresIn -= 1
        this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
      }
      if (this.drugs[i].expiresIn < 0) { // if drug expired
        if (this.drugs[i].name != "Herbal Tea") { 
          if (this.drugs[i].name != "Fervex") {
            if (this.drugs[i].benefit > 0) {
              if (this.drugs[i].name != "Magic Pill") { // "Magic Pill" never decreases in Benefit. else decrease benefit when expired
                this.drugs[i].benefit = this.drugs[i].benefit - 1;
              }
            }
          } else { // "Fervex":
            this.drugs[i].benefit =
              this.drugs[i].benefit - this.drugs[i].benefit;
          }
        } else {
          if (this.drugs[i].benefit < 50) { // "Herbal Tea" actually increases in Benefit the older it gets
            this.drugs[i].benefit = this.drugs[i].benefit + 1;
          }
        }
      }
    }

    return this.drugs;
  }
}
