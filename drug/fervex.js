import { DrugUpdater } from "./drug-updater";

export class Fervex extends DrugUpdater {
  constructor(expiresIn, benefit) {
    super(expiresIn, benefit);
  }

  updateExpiration() {
    this.expiresIn -= 1;
  }

  updateBenefitValue() {
    if (this.expiresIn <= 0) {
      this.benefit = 0;
      return;
    }

    let benefitModifier = 1;
    if (this.expiresIn <= 10 && this.expiresIn > 5) {
      benefitModifier = 2;
    } else if (this.expiresIn <= 5) {
      benefitModifier = 3;
    }

    this.benefit = this.benefit + benefitModifier;

    super.checkBenefit();
  }
}
