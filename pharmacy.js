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
/**
 * Check benefit limit.
 * @param {object} drug - This object contains benefit.
 * @returns {object} The modified drug with benefit.
 */
  checkBenefit(drug) {
    if(drug.benefit < 0) 
      drug.benefit = 0;
    else if (drug.benefit > 50)
      drug.benefit = 50;
    return drug.benefit;
  }
/**
 * Modify benefit attribute for Dafalgan
 * @param {object} drug - This object contains benefit.
 * @returns {object} The modified drug with benefit.
 */
  dafalganProcess(drug) {
    if (drug.expiresIn <= 0) {
      drug.benefit = drug.benefit - 4;
    }
    else
      drug.benefit = drug.benefit - 2;
    return drug;
  }
/**
 * Modify benefit attribute for Fervex
 * @param {object} drug - This object contains benefit.
 * @returns {object} The modified drug with benefit.
 */
  fervexProcess(drug) {
    if (drug.expiresIn > 10) 
      drug.benefit = drug.benefit + 1;
    else if (drug.expiresIn > 5 && drug.expiresIn <= 10)
      drug.benefit = drug.benefit + 2;
    else if (drug.expiresIn > 0 && drug.expiresIn <= 5)
      drug.benefit = drug.benefit + 3;
    else if (drug.expiresIn <= 0)
      drug.benefit = 0;
    return drug;
  }
/**
 * Modify benefit attribute for Herbal Tea.
 * @param {object} drug - This object contains benefit.
 * @returns {object} The modified drug with benefit.
 */
  herbalTeaProcess(drug){
    if (drug.expiresIn <= 0) {
      drug.benefit = drug.benefit + 2;
    }
    else
      drug.benefit = drug.benefit + 1;
    return drug
  }
/**
 * Modify benefit attribute for default drug.
 * @param {object} drug This object contains benefit.
 * @returns {object} The modified drug with benefit.
 */
  defautDrugProcess(drug) {
    if (drug.expiresIn <= 0) {
      drug.benefit = drug.benefit - 2;
    }
    else 
      drug.benefit = drug.benefit - 1;
    return drug;
  }
/**
 * Update benefit attribute for all drugs.
 * @returns {list} The updated drugs list with benefit.
 */
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      switch(this.drugs[i].name){

        case('Dafalgan'):
          this.drugs[i].benefit = this.checkBenefit(this.dafalganProcess(this.drugs[i]));
          break

        case("Fervex"):
          this.drugs[i].benefit = this.checkBenefit(this.fervexProcess(this.drugs[i]));
          break

        case("Herbal Tea"):
          this.drugs[i].benefit = this.checkBenefit(this.herbalTeaProcess(this.drugs[i]));
          break

        case("Magic Pill"):
          continue

        default:
          this.drugs[i].benefit = this.checkBenefit(this.defautDrugProcess(this.drugs[i]));
          break
      }
      this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
    }
    return this.drugs;
  }
}
