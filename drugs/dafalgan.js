import Drug from "./drug";
import config from "../config/config";

export default class Dafalgan extends Drug {
  constructor(expiresIn, benefit) {
    super(config.drugs.DAFALGAN.name, expiresIn, benefit);
  }
}
