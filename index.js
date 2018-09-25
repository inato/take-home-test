import { Patient, ClinicalTrial } from "./trial";

import fs from "fs";

const patients = [
  new Patient("Cold", 20, 30),
  new Patient("Multiple sclerosis", 10, 5),
  new Patient("Chronic obstructive pulmonary disease", 5, 40),
  new Patient("Pancreatic cancer", 15, 40)
];
const trial = new ClinicalTrial(patients);

const log = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  log.push(JSON.stringify(trial.updateValue()));
}

/* eslint-disable no-console */
fs.writeFile("output.txt", log, err => {
  if (err) {
    console.log("error");
  } else {
    console.log("success");
  }
});
/* eslint-enable no-console */
