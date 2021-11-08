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
    const DEFAULT_BENEFIT_RATE = -1;
    const DEFAULT_EXPIRE_RATE = -1;
    this.drugs = this.drugs.map(drug => {
      let { name, expiresIn, benefit } = drug;

      let benefitCoefficient = DEFAULT_BENEFIT_RATE;
      let expireCoefficient = DEFAULT_EXPIRE_RATE;

      if (name === "Herbal Tea") {
        benefitCoefficient = 1;
      }

      if (name === "Magic Pill") {
        benefitCoefficient = 0;
        expireCoefficient = 0;
      }

      if (name === "Fervex") {
        if (expiresIn > 10) {
          benefitCoefficient = 1;
        }
        if (expiresIn <= 10 && expiresIn > 5) {
          benefitCoefficient = 2;
        }
        if (expiresIn <= 5 && expiresIn > 0) {
          benefitCoefficient = 3;
        }
      }

      if (name === "Dafalgan") {
        benefitCoefficient = -2;
      }

      // Once the expiration date has passed, Benefit degrades twice as fast.
      if (expiresIn <= 0) {
        // exception for Fervex that drop to zero
        if (name === "Fervex") {
          return this.updateBenefitSafely(
            drug,
            expireCoefficient,
            -1 * benefit
          );
        }
        return this.updateBenefitSafely(
          drug,
          expireCoefficient,
          benefitCoefficient * 2
        );
      }

      // If the expiration date hasn't passed, Benefit degrades by 1.
      return this.updateBenefitSafely(
        drug,
        expireCoefficient,
        benefitCoefficient
      );
    });
    return this.drugs;
  }
}
