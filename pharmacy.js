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

  // updateBenefitValue() {
  //   for (var i = 0; i < this.drugs.length; i++) {
  //     if (
  //       this.drugs[i].name != "Herbal Tea" &&
  //       this.drugs[i].name != "Fervex"
  //     ) {
  //       if (this.drugs[i].benefit > 0) {
  //         if (this.drugs[i].name != "Magic Pill") {
  //           this.drugs[i].benefit = this.drugs[i].benefit - 1;
  //         }
  //       }
  //     } else {
  //       if (this.drugs[i].benefit < 50) {
  //         this.drugs[i].benefit = this.drugs[i].benefit + 1;
  //         if (this.drugs[i].name == "Fervex") {
  //           if (this.drugs[i].expiresIn < 11) {
  //             if (this.drugs[i].benefit < 50) {
  //               this.drugs[i].benefit = this.drugs[i].benefit + 1;
  //             }
  //           }
  //           if (this.drugs[i].expiresIn < 6) {
  //             if (this.drugs[i].benefit < 50) {
  //               this.drugs[i].benefit = this.drugs[i].benefit + 1;
  //             }
  //           }
  //         }
  //       }
  //     }
  //     if (this.drugs[i].name != "Magic Pill") {
  //       this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
  //     }
  //     if (this.drugs[i].expiresIn < 0) {
  //       if (this.drugs[i].name != "Herbal Tea") {
  //         if (this.drugs[i].name != "Fervex") {
  //           if (this.drugs[i].benefit > 0) {
  //             if (this.drugs[i].name != "Magic Pill") {
  //               this.drugs[i].benefit = this.drugs[i].benefit - 1;
  //             }
  //           }
  //         } else {
  //           this.drugs[i].benefit =
  //             this.drugs[i].benefit - this.drugs[i].benefit;
  //         }
  //       } else {
  //         if (this.drugs[i].benefit < 50) {
  //           this.drugs[i].benefit = this.drugs[i].benefit + 1;
  //         }
  //       }
  //     }
  //   }

  //   return this.drugs;
  // }

  updateBenefitSafely(drug, expiresInDiff, benefitDiff) {
    let { name, expiresIn, benefit } = drug;

    expiresIn = expiresIn + expiresInDiff;

    // calculate what the value of benefit would be if we don't apply limitations
    benefit = benefit + benefitDiff;
    // benefit can't be negative nor greater than 50
    benefit = benefit < 0 ? 0 : benefit > 50 ? 50 : benefit;
    return { name, expiresIn, benefit };
  }

  updateBenefitValue() {
    const DEFAULT_BENEFIT_DECAY = -1;
    return this.drugs.map(drug => {
      let { name, expiresIn, benefit } = drug;
      const benefitCoefficient = DEFAULT_BENEFIT_DECAY;
      // Once the expiration date has passed, Benefit degrades twice as fast.
      if (expiresIn < 0) return this.updateBenefitSafely(drug, -1, benefitCoefficient);
      // If the expiration date hasn't passed, Benefit degrades twice as fast.
      return this.updateBenefitSafely(drug, -1, benefitCoefficient);
    });
  }
}
