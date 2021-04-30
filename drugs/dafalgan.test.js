import { Dafalgan } from ".";
import Drug from "./drug";

class FooDrug extends Drug {
  constructor(expiresIn, benefit) {
    super("FooDrug", expiresIn, benefit);
  }
}

describe("Dafalgan drug", () => {
  it("should have Dafalgan as name", () => {
    const doliprane = new Dafalgan(3, 20);

    expect(doliprane.name).toEqual("Dafalgan");
  });

  it("should degrade in benefit twice as fast a normal drugs", () => {
    const doliprane = new Dafalgan(3, 20);
    const fooDrug = new FooDrug(3, 20);

    for (let daysToSimulate = 0; daysToSimulate < 3; daysToSimulate++) {
      doliprane.simulateOneDay();
      fooDrug.simulateOneDay();
    }

    expect(fooDrug.benefit / doliprane.benefit).toEqual(2);

    //when expired normal drug benefit already degrade twice as fast
    for (let daysToSimulate = 0; daysToSimulate < 5; daysToSimulate++) {
      doliprane.simulateOneDay();
      fooDrug.simulateOneDay();
    }

    expect(fooDrug.benefit / doliprane.benefit).toEqual(2);
  });
});
