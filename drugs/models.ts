export interface Drug {
  name: DrugNames;
  expiresIn: number;
  benefit: number;
}

export enum DrugNames {
  DOLIPRANE = 'Doliprane',
  HERBAL_TEA = 'Herbal Tea',
  FERVEX = 'Fervex',
  MAGIC_PILL = 'Magic Pill',
  DAFALGAN = 'Dafalgan',
}
