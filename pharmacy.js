const MAX_BENEFIT = 50;

const DrugsRules = {
  default: (expiresIn_, benefit_) => {
    let benefit = benefit_;
    let expiresIn = expiresIn_;

    if (benefit > 0) {
      benefit -= 1;
    }
    expiresIn -= 1;
    if (expiresIn < 0 && benefit > 0) {
      benefit -= 1;
    }
    return { expiresIn, benefit };
  },
  "Herbal Tea": (expiresIn_, benefit_) => {
    let benefit = benefit_;
    let expiresIn = expiresIn_;
    if (benefit < MAX_BENEFIT) {
      benefit += 1;
    }
    expiresIn -= 1;

    if (expiresIn < 0 && benefit < MAX_BENEFIT) {
      benefit += 1;
    }
    return { expiresIn, benefit };
  },
  "Magic Pill": (expiresIn_, benefit_) => {
    return { expiresIn: expiresIn_, benefit: benefit_ };
  },
  Fervex: (expiresIn_, benefit_) => {
    let benefit = benefit_;
    let expiresIn = expiresIn_;
    if (benefit < MAX_BENEFIT) {
      benefit += 1;
      if (expiresIn < 11) {
        benefit += 1;
      }
      if (expiresIn < 6) {
        benefit += 1;
      }
    }
    expiresIn -= 1;

    if (expiresIn < 0) {
      benefit = 0;
    }

    return { expiresIn, benefit };
  },
};
export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  updateBenefitValue() {
    let calculFunction; // the function that will treat benefit and expiresIn depending on the Drug name
    /* if an explicit rule already declared fo the drug we use it else we use the default method */
    if (Object.keys(DrugsRules).includes(this.name)) {
      calculFunction = DrugsRules[this.name];
    } else {
      calculFunction = DrugsRules["default"];
    }

    const { benefit, expiresIn } = calculFunction(this.expiresIn, this.benefit); // calculate the new benefit, expiresIn values
    this.benefit = benefit;
    this.expiresIn = expiresIn;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      this.drugs[i].updateBenefitValue();
    }

    return this.drugs;
  }
}
