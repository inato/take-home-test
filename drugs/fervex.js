import Drug from "./abstractDrug";

export default class Fervex extends Drug {
  constructor(expiresIn, benefit) {
    super("Fervex", expiresIn, benefit);
  }

  simulateOneDay() {
    this.decrementExpiresIn();

    if (this.hasExpired) {
      this.benefit = 0;
    } else {
      this.incrementBenefit();

      if (this.expiresIn < 10) {
        this.incrementBenefit();
      }
    }
  }
}
