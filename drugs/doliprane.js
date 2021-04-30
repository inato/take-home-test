import Drug from "./abstractDrug";

export default class Doliprane extends Drug {
  constructor(expiresIn, benefit) {
    super("Doliprane", expiresIn, benefit);
  }
}
