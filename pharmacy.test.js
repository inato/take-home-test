import { Pharmacy } from "./pharmacy";
import { Drug } from "./drug";

let drugs;
let pharmacy;
describe("Pharmacy", () => {
  describe("updateBenefitValue", () => {
    beforeEach(() => {
      drugs = [
        new Drug("Doliprane", 20, 30),
        new Drug("Herbal Tea", 10, 5),
        new Drug("Fervex", 5, 40),
        new Drug("Magic Pill", 15, 40),
      ];

      pharmacy = new Pharmacy(drugs);
    });

    it("Should return an array of drugs", () => {
      const result = pharmacy.updateBenefitValue();

      expect(result).toBeInstanceOf(Array);
      result.forEach((drug) => expect(drug).toBeInstanceOf(Drug));
    });

    it("should call the updateBenefitValueAndExpiration method of each drug", () => {
      const spies = drugs.map((drug) =>
        jest.spyOn(drug, "updateBenefitValueAndExpiration")
      );

      pharmacy.updateBenefitValue();

      spies.forEach((spy) => expect(spy).toHaveBeenCalledTimes(1));
    });
  });
});
