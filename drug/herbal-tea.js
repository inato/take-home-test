import { DrugUpdater } from "./drug-updater";

export class HerbalTea extends DrugUpdater {
  constructor(expiresIn, benefit) {
    super(expiresIn, benefit);
  }

  updateExpiration() {
    this.expiresIn -= 1;
  }

  updateBenefitValue() {
    const benefitModifier = this.expiresIn > 0 ? 1 : 2;

    this.benefit = this.benefit + benefitModifier;

    super.checkBenefit();
  }
}
