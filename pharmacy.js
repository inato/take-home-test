/**
 * Class representing a Pharmacy
 */
export class Pharmacy {
  /**
   *
   * @param {Drug[]} drugs The array of Drug that the pharmacy contains
   */
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  /**
   * Updates the benefit and expiresIn properties of each drug in the pharmacy
   * @returns The updates drugs
   */
  updateBenefitValue() {
    this.drugs.forEach((drug) => drug.updateBenefitValueAndExpiration());

    return this.drugs;
  }
}
