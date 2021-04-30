import Drug from "./abstractDrug";

export default class HerbalTea extends Drug {
  constructor(expiresIn, benefit) {
    super("Herbal Tea", expiresIn, benefit);
  }

  simulateOneDay() {
    this.decrementExpiresIn();
    this.incrementBenefit();
  }
}
