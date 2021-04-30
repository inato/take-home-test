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
}
