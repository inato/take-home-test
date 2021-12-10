import { EOL } from "os";
import { writeFile } from "fs";

import { Drug } from "./drug";
import { Pharmacy } from "./pharmacy";

const drugs = [
  new Drug("Doliprane", 20, 30),
  new Drug("Herbal Tea", 10, 5),
  new Drug("Fervex", 5, 40),
  new Drug("Magic Pill", 15, 40),
];
const trial = new Pharmacy(drugs);

const log = Array.from({ length: 30 }).map(() =>
  JSON.stringify(trial.updateBenefitValue())
);

/* eslint-disable no-console */
writeFile("output.txt", log.join(`,${EOL}`), (err) => {
  if (err) {
    console.log("error");
  } else {
    console.log("success");
  }
});
/* eslint-enable no-console */
