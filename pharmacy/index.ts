import { DrugNames, Drug as DrugModel } from '../drugs/models';

export class Pharmacy {
  private benefitMaxDays = 50;
  private decrementBenefitOffset: number;

  constructor(private drugs: DrugModel[]) {}

  updateBenefitValue() {
    this.drugs = this.drugs.map((drug: DrugModel) => {
      this.setDecrementBenefitOffset(drug.name);

      drug.expiresIn = Pharmacy.decrementExpiresInIfNotMagicPill(drug.name, drug.expiresIn);
      drug.benefit = this.alterBenefit(drug);

      return drug;
    });

    return this.drugs;
  }

  private alterBenefit({ name, benefit, expiresIn }: DrugModel): number {
    if (name !== DrugNames.HERBAL_TEA && name !== DrugNames.FERVEX && benefit > 0) {
      benefit = this.decrementNormalDrugBenefit(name, benefit);
    } else if ([DrugNames.HERBAL_TEA, DrugNames.FERVEX].includes(name as DrugNames) && benefit < this.benefitMaxDays) {
      benefit = benefit + 1;
      benefit = this.incrementFervexBenefitIfLessThan11DaysLeft({ name, benefit, expiresIn });
    }

    if (expiresIn < 0) {
      benefit = this.alterBenefitWhenExpiresInIsLessThanZero(name, benefit);
    }

    return benefit;
  }

  private alterBenefitWhenExpiresInIsLessThanZero(name: string, benefit: number): number {
    const isHerbalTea = name === DrugNames.HERBAL_TEA;
    if (isHerbalTea && benefit < this.benefitMaxDays) {
      benefit = benefit + 1;

      return benefit;
    }

    if (isHerbalTea || name === DrugNames.MAGIC_PILL || benefit <= 0) {
      return benefit;
    }

    benefit = this.decrementBenefit(benefit);

    if (name === DrugNames.FERVEX) {
      benefit = benefit - benefit;
    }

    return benefit;
  }

  private incrementFervexBenefitIfLessThan11DaysLeft({ benefit, name, expiresIn }: any): number {
    if (name !== DrugNames.FERVEX) {
      return benefit;
    }

    if (benefit >= this.benefitMaxDays) {
      return benefit;
    }

    if (expiresIn < 11) {
      benefit = benefit + 1;
    }

    if (expiresIn < 6) {
      benefit = benefit + 1;
    }

    return benefit;
  }

  private setDecrementBenefitOffset(name: string) {
    if (name === DrugNames.DAFALGAN) {
      this.decrementBenefitOffset = 2;
      return;
    }

    this.decrementBenefitOffset = 1;
  }

  private decrementBenefit(benefit: number): number {
    return benefit > 1 && benefit - this.decrementBenefitOffset >= 0 ? benefit - this.decrementBenefitOffset : 0;
  }

  private decrementNormalDrugBenefit(name: string, benefit: number): number {
    if (name !== DrugNames.MAGIC_PILL) {
      benefit = this.decrementBenefit(benefit);
    }

    return benefit;
  }

  private static decrementExpiresInIfNotMagicPill(name: string, expiresIn: number): number {
    if (name === DrugNames.MAGIC_PILL) {
      return expiresIn;
    }

    expiresIn = expiresIn - 1;
    return expiresIn;
  }
}
