export default class Drug {
  constructor(name, expiresIn, benefit) {
    const isValidBenefit = 0 <= benefit && benefit <= 50;
    if (!isValidBenefit) {
      throw new Error("a drug benefit value can only be between 0 and 50");
    }

    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  get hasExpired() {
    return this.expiresIn < 0;
  }

  incrementBenefit() {
    this.benefit = this.benefit + 1;
  }

  decrementBenefit() {
    this.benefit = this.benefit - 1;
  }

  decrementExpiresIn() {
    this.expiresIn = this.expiresIn - 1;
  }

  simulateOneDay() {
    this.decrementExpiresIn();
    this.decrementBenefit();

    if (this.hasExpired) {
      this.decrementBenefit();
    }
  }
}
