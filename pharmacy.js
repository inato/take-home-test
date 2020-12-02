export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      const drug = this.drugs[i];
      switch (drug.name) {
        case "Herbal Tea":
          drug.expiresIn === 0
            ? (drug.benefit = drug.benefit + 2)
            : (drug.benefit = drug.benefit + 1);
          break;
        case "Fervex":
          drug.expiresIn = drug.expiresIn - 1;
          if (drug.expiresIn === 0) {
            drug.benefit = 0;
          } else if (drug.expiresIn <= 5) {
            drug.benefit = drug.benefit + 3;
          } else if (drug.expiresIn <= 10) {
            drug.benefit = drug.benefit + 2;
          }
          break;
        case "Magic Pill":
          break;
        case "Dafalgan":
          drug.benefit = drug.benefit - 2;
          drug.expiresIn = drug.expiresIn - 1;
          break;
        default:
          drug.expiresIn = drug.expiresIn - 1;
          if (drug.expiresIn <= 0) {
            drug.expiresIn = 0;
            drug.benefit = drug.benefit - 2;
          } else {
            drug.benefit = drug.benefit - 1;
          }
          if (drug.benefit >= 50) drug.benefit = 50;
          break;
      }
    }
    return this.drugs;
  }
}
