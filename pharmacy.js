export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export const durgsList = {
  // Default drug
  _default: (expiresIn, benefit) => {
    if (expiresIn < 0) benefit = benefit > 1 ? benefit - 2 : 0;
    else benefit = benefit > 0 ? benefit - 1 : 0;
    expiresIn = expiresIn - 1;
    return { expiresIn, benefit };
  },
  // Herbal Tea drug
  "Herbal Tea": (expiresIn, benefit) => {
    expiresIn = expiresIn - 1;
    if (benefit < 50) {
      benefit = benefit + 1;
      if (expiresIn < 0) {
        benefit = benefit + 1;
      }
    }
    return { expiresIn, benefit };
  },
  // Magic Pill drug
  "Magic Pill": (expiresIn, benefit) => ({
    expiresIn,
    benefit,
  }),
  // Magic Pill drug
  Fervex: (expiresIn, benefit) => {
    expiresIn = expiresIn - 1;
    if (benefit < 50) {
      benefit = benefit + 1;

      if (expiresIn < 11) {
        benefit = benefit + 1;
      }
      if (expiresIn < 6) {
        benefit = benefit + 1;
      }

      if (expiresIn < 0) {
        benefit = 0;
      }
    }
    return { expiresIn, benefit };
  },
  // Dafalgan drug
  Dafalgan: (expiresIn, benefit) => {
    if (expiresIn < 0) benefit = benefit > 3 ? benefit - 4 : 0;
    else benefit = benefit > 1 ? benefit - 2 : 0;
    expiresIn = expiresIn - 1;
    return { expiresIn, benefit };
  },
};

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      const drugName = Object.keys(durgsList).includes(this.drugs[i].name)
        ? this.drugs[i].name
        : "_default";

      const { expiresIn, benefit } = durgsList[drugName](
        this.drugs[i].expiresIn,
        this.drugs[i].benefit
      );

      this.drugs[i].expiresIn = expiresIn;
      this.drugs[i].benefit = benefit;
    }

    return this.drugs;
  }
}
