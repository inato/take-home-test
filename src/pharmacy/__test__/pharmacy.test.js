import { Drug } from "../../drug/drug";
import { Pharmacy } from "../pharmacy";

describe("Pharmacy", () => {
  describe("constructor", () => {
    it("should set drugs in pharmacy", () => {
      const drugs = [new Drug("test", 2, 3), new Drug("xxx", 10, 5)];
      const pharmacy = new Pharmacy(drugs);

      expect(pharmacy.drugs).toHaveLength(2);
      expect(pharmacy.drugs[0].name).toEqual(drugs[0].name);
      expect(pharmacy.drugs[0].expiresIn).toEqual(drugs[0].expiresIn);
      expect(pharmacy.drugs[0].benefit).toEqual(drugs[0].benefit);
      expect(pharmacy.drugs[1].name).toEqual(drugs[1].name);
      expect(pharmacy.drugs[1].expiresIn).toEqual(drugs[1].expiresIn);
      expect(pharmacy.drugs[1].benefit).toEqual(drugs[1].benefit);
    });
  });

  describe("updateBenefitValue", () => {
    it("should update benefit value for each drug", () => {
      const drugs = [new Drug("test", 2, 3), new Drug("xxx", 10, 5)];
      const updatedDrugs = [new Drug("test", 1, 2), new Drug("xxx", 9, 4)];
      const pharmacy = new Pharmacy(drugs);
      pharmacy.updateBenefitValue();

      expect(pharmacy.drugs).toHaveLength(2);
      expect(pharmacy.drugs[0].name).toEqual(updatedDrugs[0].name);
      expect(pharmacy.drugs[0].expiresIn).toEqual(updatedDrugs[0].expiresIn);
      expect(pharmacy.drugs[0].benefit).toEqual(updatedDrugs[0].benefit);
      expect(pharmacy.drugs[1].name).toEqual(updatedDrugs[1].name);
      expect(pharmacy.drugs[1].expiresIn).toEqual(updatedDrugs[1].expiresIn);
      expect(pharmacy.drugs[1].benefit).toEqual(updatedDrugs[1].benefit);
    });
  });
});
