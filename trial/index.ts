import * as fs from 'fs';
import * as _ from 'lodash';

import { drugsWithoutDafalgan } from '../drugs/fixtures';
import { Pharmacy } from '../pharmacy';

export default function runTrial(trial = new Pharmacy(drugsWithoutDafalgan), trialDuration: number = 30): string[] {
  const log: string[] = [];

  const days = _.range(0, trialDuration);
  days.forEach(() => {
    const result = trial.updateBenefitValue();
    log.push(JSON.stringify(result));
  });

  /* eslint-disable no-console */
  fs.writeFile('output.txt', log as any, (err) => {
    if (err) {
      console.log('error');
    } else {
      console.log('success');
    }
  });

  return log;
}
