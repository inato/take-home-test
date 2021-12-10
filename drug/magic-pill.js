import { DrugUpdater } from "./drug-updater";

export class MagicPill extends DrugUpdater {
  constructor(expiresIn, benefit) {
    super(expiresIn, benefit);
  }

  updateExpiration() {}

  updateBenefitValue() {}
}
