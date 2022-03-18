const MAX_BENEFIT= 50;

export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
  isBenefitEditable(){
    return this.benefit < MAX_BENEFIT
  }
  increaseBenefit(){
    if (this.isBenefitEditable()) {
      this.benefit = this.benefit + 1;
    }
  }
  updateBenefitValue(){
    if ( // default Benefit degrades
      this.name != "Herbal Tea" &&
      this.name != "Fervex"
    ) {
      if (this.benefit > 0) { // The Benefit of an item is never negative
        if (this.name != "Magic Pill") { // "Magic Pill" never decreases in Benefit
          this.benefit = this.benefit - 1;
        }
      }
    } else { // "Herbal Tea" || "Fervex"
      if (this.isBenefitEditable()){ // The Benefit of an item is never more than 50
        this.benefit = this.benefit + 1;
        if (this.name == "Fervex") { // "Fervex" custom case
          if (this.expiresIn < 11) {
            this.increaseBenefit();
          }
          if (this.expiresIn < 6) {
            this.increaseBenefit();
          }
        }
      }
    }

    // expiration go down by one day
    if (this.name != "Magic Pill") { //for this case : "Magic Pill" never expires, default expiresIn -= 1
      this.expiresIn = this.expiresIn - 1;
    }

    // verify expiration
    if (this.expiresIn < 0) { // if drug expired
      if (this.name != "Herbal Tea") { 
        if (this.name != "Fervex") {
          if (this.benefit > 0) {
            if (this.name != "Magic Pill") { // "Magic Pill" never decreases in Benefit. else decrease benefit when expired
              this.benefit = this.benefit - 1;
            }
          }
        } else { // "Fervex":
          this.benefit = 0;
        }
      } else {
        // "Herbal Tea" actually increases in Benefit the older it gets
        this.increaseBenefit();
      }
    }
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      this.drugs[i].updateBenefitValue()
    }

    return this.drugs;
  }
}
