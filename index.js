import {
  Drug,
  HerbalTea,
  MagicPill,
  Fervex,
  Dafalgan,
  Pharmacy,
} from "./pharmacy";

import fs from "fs";

const drugs = [
  new Drug({ name: "Doliprane", expiresIn: 20, benefit: 30 }),
  new HerbalTea({ expiresIn: 10, benefit: 5 }),
  new Fervex({ expiresIn: 5, benefit: 40 }),
  new MagicPill({ expiresIn: 15, benefit: 40 }),
];
const trial = new Pharmacy(drugs);

const log = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  log.push(JSON.stringify(trial.updateBenefitValue()));
}

/* eslint-disable no-console */
fs.writeFile("output.txt", log, (err) => {
  if (err) {
    console.log("error");
  } else {
    console.log("success");
  }
});
/* eslint-enable no-console */
