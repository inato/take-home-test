import { Drug, DrugNames } from './models';

export default function drugFactory(name: DrugNames, expiresIn: number, benefit: number): Drug {
  return { name, expiresIn, benefit };
}


