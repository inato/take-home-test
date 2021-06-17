import { drugsWithoutDafalgan } from './drugs/fixtures';
import { Pharmacy } from './pharmacy';
import runTrial from './trial';

runTrial(new Pharmacy(drugsWithoutDafalgan));
