export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (let drug of this.drugs) {
      drug.update();
    }
  }

  getFormattedDrugs() {
    return this.drugs.map(({ name, expiresIn, benefit }) => ({
      name,
      expiresIn,
      benefit
    }));
  }
}
