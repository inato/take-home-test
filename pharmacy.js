export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    this.drugs.forEach((drug) => drug.updateBenefitValueAndExpiration());

    return this.drugs;
  }
}
