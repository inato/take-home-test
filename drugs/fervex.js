import Drug from "./abstractDrug";

export default class Fervex extends Drug {
  constructor(expiresIn, benefit) {
    super("Fervex", expiresIn, benefit);
  }

  simulateOneDay() {
    this.decrementExpiresIn();
    this.incrementBenefit();
  }
}
