import { DrugUpdater } from "./drug-updater";

export class Dafalgan extends DrugUpdater {
  constructor(expiresIn, benefit) {
    super(expiresIn, benefit);
  }

  updateExpiration() {
    this.expiresIn -= 1;
  }

  updateBenefitValue() {
    const benefitModifier = this.expiresIn > 0 ? 2 : 4;

    this.benefit = this.benefit - benefitModifier;

    super.checkBenefit();
  }
}
