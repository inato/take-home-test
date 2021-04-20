import {
  DafalganStrategy,
  FervexStrategy,
  HerbalTeaStrategy,
  MagicPillStrategy,
} from './strategies'

export class Pharmacy {
  drugStrategies = {
    'Herbal Tea': new HerbalTeaStrategy(),
    'Magic Pill': new MagicPillStrategy(),
    Fervex: new FervexStrategy(),
    Dafalgan: new DafalganStrategy(),
  }
  specialsDrugs = Object.keys(this.drugStrategies)

  constructor(drugs = []) {
    this.drugs = drugs
  }

  updatePharmacyBenefits() {
    this.drugs.forEach((drug) => this.updateDrug(drug))
    return this.drugs
  }

  updateDrug(drug) {
    if (this.specialsDrugs.includes(drug.name))
      drug.setBenefitStrategy(this.drugStrategies[drug.name])
    drug.updateBenefit()
    drug.updateExpiration()
  }
}
