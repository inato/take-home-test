import { Dafalgan } from ".";
import Drug from "./drug";

class FooDrug extends Drug {
  constructor(expiresIn, benefit) {
    super("FooDrug", expiresIn, benefit);
  }
}

describe("Dafalgan drug", () => {
  it("should have Dafalgan as name", () => {
    const dafalgan = new Dafalgan(3, 20);

    expect(dafalgan.name).toEqual("Dafalgan");
  });

  it("should degrade in benefit twice as fast a normal drugs", () => {
    const defaultBenefit = 50;
    const dafalgan = new Dafalgan(3, defaultBenefit);
    const fooDrug = new FooDrug(3, defaultBenefit);

    for (let daysSimulated = 0; daysSimulated < 3; daysSimulated++) {
      dafalgan.simulateOneDay();
      fooDrug.simulateOneDay();
    }

    let degradeRatio =
      (defaultBenefit - dafalgan.benefit) / (defaultBenefit - fooDrug.benefit);

    expect(degradeRatio).toEqual(2);

    //when expired normal drug benefit already degrade twice as fast
    for (let daysSimulated = 0; daysSimulated < 5; daysSimulated++) {
      dafalgan.simulateOneDay();
      fooDrug.simulateOneDay();
    }

    degradeRatio =
      (defaultBenefit - dafalgan.benefit) / (defaultBenefit - fooDrug.benefit);

    expect(degradeRatio).toEqual(2);
  });
});
