import { DrugNames } from './models';

import drugFactory from '.';

export const drugsWithoutDafalgan = [
  drugFactory(DrugNames.DOLIPRANE, 20, 30),
  drugFactory(DrugNames.HERBAL_TEA, 10, 5),
  drugFactory(DrugNames.FERVEX, 5, 40),
  drugFactory(DrugNames.MAGIC_PILL, 15, 40),
];

export const drugs = [
  drugFactory(DrugNames.DOLIPRANE, 20, 30),
  drugFactory(DrugNames.HERBAL_TEA, 10, 5),
  drugFactory(DrugNames.FERVEX, 5, 40),
  drugFactory(DrugNames.MAGIC_PILL, 15, 40),
  drugFactory(DrugNames.DAFALGAN, 40, 45),
];
