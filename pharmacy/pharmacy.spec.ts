import drugFactory from '../drugs';
import { Drug, DrugNames } from '../drugs/models';

import { Pharmacy } from '.';

describe('Pharmarcy', () => {
  describe('::updateBenefitValue', () => {
    describe('when 9 days have passed from 50 days', () => {
      let pharmacy: Pharmacy;
      let result: Drug[];

      beforeEach(() => {
        pharmacy = new Pharmacy([
          drugFactory(DrugNames.DOLIPRANE, 50, 10),
          drugFactory(DrugNames.HERBAL_TEA, 50, 10),
          drugFactory(DrugNames.FERVEX, 50, 10),
          drugFactory(DrugNames.MAGIC_PILL, 50, 10),
          drugFactory(DrugNames.DAFALGAN, 50, 10),
        ]);

        pharmacy.updateBenefitValue();
        pharmacy.updateBenefitValue();
        pharmacy.updateBenefitValue();
        pharmacy.updateBenefitValue();
        pharmacy.updateBenefitValue();
        pharmacy.updateBenefitValue();
        pharmacy.updateBenefitValue();
        pharmacy.updateBenefitValue();
        result = pharmacy.updateBenefitValue();
      });

      it('should return drugs', () => {
        expect(result).toMatchInlineSnapshot(`
Array [
  Object {
    "benefit": 1,
    "expiresIn": 41,
    "name": "Doliprane",
  },
  Object {
    "benefit": 19,
    "expiresIn": 41,
    "name": "Herbal Tea",
  },
  Object {
    "benefit": 19,
    "expiresIn": 41,
    "name": "Fervex",
  },
  Object {
    "benefit": 10,
    "expiresIn": 50,
    "name": "Magic Pill",
  },
  Object {
    "benefit": 0,
    "expiresIn": 41,
    "name": "Dafalgan",
  },
]
`);
      });
    });

    describe('when there are less than 3 days left', () => {
      let pharmacy: Pharmacy;
      let result: Drug[];

      beforeEach(() => {
        pharmacy = new Pharmacy([
          drugFactory(DrugNames.DOLIPRANE, 2, 25),
          drugFactory(DrugNames.HERBAL_TEA, 2, 25),
          drugFactory(DrugNames.FERVEX, 2, 25),
          drugFactory(DrugNames.MAGIC_PILL, 2, 25),
          drugFactory(DrugNames.DAFALGAN, 2, 25),
        ]);

        result = pharmacy.updateBenefitValue();
      });

      it('should return drugs', () => {
        expect(result).toMatchInlineSnapshot(`
Array [
  Object {
    "benefit": 24,
    "expiresIn": 1,
    "name": "Doliprane",
  },
  Object {
    "benefit": 26,
    "expiresIn": 1,
    "name": "Herbal Tea",
  },
  Object {
    "benefit": 28,
    "expiresIn": 1,
    "name": "Fervex",
  },
  Object {
    "benefit": 25,
    "expiresIn": 2,
    "name": "Magic Pill",
  },
  Object {
    "benefit": 23,
    "expiresIn": 1,
    "name": "Dafalgan",
  },
]
`);
      });
    });

    describe('when there are less 10 days left', () => {
      let pharmacy: Pharmacy;
      let result: Drug[];

      beforeEach(() => {
        pharmacy = new Pharmacy([
          drugFactory(DrugNames.DOLIPRANE, 9, 25),
          drugFactory(DrugNames.HERBAL_TEA, 9, 25),
          drugFactory(DrugNames.FERVEX, 9, 25),
          drugFactory(DrugNames.MAGIC_PILL, 9, 25),
          drugFactory(DrugNames.DAFALGAN, 9, 25),
        ]);

        result = pharmacy.updateBenefitValue();
      });

      it('should return drugs', () => {
        expect(result).toMatchInlineSnapshot(`
Array [
  Object {
    "benefit": 24,
    "expiresIn": 8,
    "name": "Doliprane",
  },
  Object {
    "benefit": 26,
    "expiresIn": 8,
    "name": "Herbal Tea",
  },
  Object {
    "benefit": 27,
    "expiresIn": 8,
    "name": "Fervex",
  },
  Object {
    "benefit": 25,
    "expiresIn": 9,
    "name": "Magic Pill",
  },
  Object {
    "benefit": 23,
    "expiresIn": 8,
    "name": "Dafalgan",
  },
]
`);
      });
    });

    describe('when the expiration date has passed', () => {
      let pharmacy: Pharmacy;
      let result: Drug[];

      beforeEach(() => {
        pharmacy = new Pharmacy([
          drugFactory(DrugNames.DOLIPRANE, 0, 25),
          drugFactory(DrugNames.HERBAL_TEA, 0, 25),
          drugFactory(DrugNames.FERVEX, 0, 25),
          drugFactory(DrugNames.MAGIC_PILL, 0, 25),
          drugFactory(DrugNames.DAFALGAN, 0, 25),
        ]);

        result = pharmacy.updateBenefitValue();
      });

      it('should return drugs', () => {
        expect(result).toMatchInlineSnapshot(`
Array [
  Object {
    "benefit": 23,
    "expiresIn": -1,
    "name": "Doliprane",
  },
  Object {
    "benefit": 27,
    "expiresIn": -1,
    "name": "Herbal Tea",
  },
  Object {
    "benefit": 0,
    "expiresIn": -1,
    "name": "Fervex",
  },
  Object {
    "benefit": 25,
    "expiresIn": 0,
    "name": "Magic Pill",
  },
  Object {
    "benefit": 21,
    "expiresIn": -1,
    "name": "Dafalgan",
  },
]
`);
      });
    });

    describe('when far from the expiration date', () => {
      let pharmacy: Pharmacy;
      let result: Drug[];

      beforeEach(() => {
        pharmacy = new Pharmacy([
          drugFactory(DrugNames.DOLIPRANE, 30, 25),
          drugFactory(DrugNames.HERBAL_TEA, 30, 25),
          drugFactory(DrugNames.FERVEX, 30, 25),
          drugFactory(DrugNames.MAGIC_PILL, 30, 25),
          drugFactory(DrugNames.DAFALGAN, 30, 25),
        ]);

        result = pharmacy.updateBenefitValue();
      });

      it('should return drugs', () => {
        expect(result).toMatchInlineSnapshot(`
Array [
  Object {
    "benefit": 24,
    "expiresIn": 29,
    "name": "Doliprane",
  },
  Object {
    "benefit": 26,
    "expiresIn": 29,
    "name": "Herbal Tea",
  },
  Object {
    "benefit": 26,
    "expiresIn": 29,
    "name": "Fervex",
  },
  Object {
    "benefit": 25,
    "expiresIn": 30,
    "name": "Magic Pill",
  },
  Object {
    "benefit": 23,
    "expiresIn": 29,
    "name": "Dafalgan",
  },
]
`);
      });
    });
  });
});
