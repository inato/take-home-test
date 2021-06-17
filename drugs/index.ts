import { Drug } from './models';

export default function drugFactory(name: string, expiresIn: number, benefit: number): Drug {
  return { name, expiresIn, benefit };
}


