import Drug from "./drug";
import config from "../config/config";

export default class Doliprane extends Drug {
  constructor(expiresIn, benefit) {
    super(config.drugs.DOLIPRANE.name, expiresIn, benefit);
  }
}
