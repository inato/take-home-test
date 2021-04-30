import config from "../config/config";

export default class Drug {
  constructor(name, expiresIn, benefit) {
    const isValidBenefit =
      config.MIN_BENEFIT <= benefit && benefit <= config.MAX_BENEFIT;

    if (!isValidBenefit) {
      throw new Error(
        `a drug benefit value can only be between ${config.MIN_BENEFIT} and ${config.MAX_BENEFIT}`
      );
    }

    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  get hasExpired() {
    return this.expiresIn < 0;
  }

  incrementBenefit() {
    const canIncrementBenefit = this.benefit < config.MAX_BENEFIT;

    if (canIncrementBenefit) {
      this.benefit++;
    }
  }

  decrementBenefit() {
    const canDecrementBenefit = this.benefit > config.MIN_BENEFIT;

    if (canDecrementBenefit) {
      this.benefit--;
    }
  }

  decrementExpiresIn() {
    this.expiresIn--;
  }

  simulateOneDay() {
    this.decrementExpiresIn();
    this.decrementBenefit();

    if (this.hasExpired) {
      this.decrementBenefit();
    }
  }
}
