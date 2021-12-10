import { BasicDrug } from "./basic-drug";
import { Dafalgan } from "./dafalgan";
import { Fervex } from "./fervex";
import { HerbalTea } from "./herbal-tea";
import { MagicPill } from "./magic-pill";

/**
 * Class representing a Drug
 */
export class Drug {
  #drug;

  /**
   * Creates a Drug
   * @param {string} name The name of the drug
   * @param {number} expiresIn The expiry date of the drug. A whole number
   * @param {number} benefit The benefit of the drug. A whole number between 0 and 50 included
   */
  constructor(name, expiresIn, benefit) {
    // TODO: Ask people in charge of other piece of the software if we can add these type checks ;)
    // if (typeof name !== "string" || name === "") {
    //   throw new TypeError("name parameter must be a non empty string");
    // }

    // if (parseInt(expiresIn) !== expiresIn) {
    //   throw new TypeError("expiresIn parameter must be a whole number");
    // }

    // if (parseInt(benefit) !== benefit || benefit < 0 || benefit > 50) {
    //   throw new TypeError(
    //     "benefit parameter must be a whole number between 0 and 50 included"
    //   );
    // }

    this.name = name;
    switch (name) {
      case "Magic Pill":
        this.#drug = new MagicPill(expiresIn, benefit);
        break;
      case "Herbal Tea":
        this.#drug = new HerbalTea(expiresIn, benefit);
        break;
      case "Fervex":
        this.#drug = new Fervex(expiresIn, benefit);
        break;
      case "Dafalgan":
        this.#drug = new Dafalgan(expiresIn, benefit);
        break;
      default:
        this.#drug = new BasicDrug(expiresIn, benefit);
    }
  }

  set benefit(value) {
    this.#drug.benefit = value;
  }

  get benefit() {
    return this.#drug.benefit;
  }

  set expiresIn(value) {
    this.#drug.expiresIn = value;
  }

  get expiresIn() {
    return this.#drug.expiresIn;
  }

  /**
   * Updates the benefit and expiresIn properties of the drug
   */
  updateBenefitValueAndExpiration() {
    this.#drug.updateBenefitValue();
    this.#drug.updateExpiration();
  }
}
