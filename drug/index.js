import { BasicDrug } from "./basic-drug";
import { Dafalgan } from "./dafalgan";
import { Fervex } from "./fervex";
import { HerbalTea } from "./herbal-tea";
import { MagicPill } from "./magic-pill";
export class Drug {
  #drug;

  constructor(name, expiresIn, benefit) {
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

  updateBenefitValueAndExpiration() {
    this.#drug.updateBenefitValue();
    this.#drug.updateExpiration();
  }
}
