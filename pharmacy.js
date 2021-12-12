/* eslint-disable prettier/prettier */
import {
    canDecreaseBenefit,
    getDecreaseBenefit,
    getDecreaseExpiry,
    getDecreaseExpiryBenefit,
    getFervexExpiryBenefit,
    getHerbalTeaBenefit,
    getIncreaseBenefit
} from './pharmacy.infra';

export class Drug {
    constructor(name, expiresIn, benefit) {
        this.name = name;
        this.expiresIn = expiresIn;
        this.benefit = benefit;
    }
}

export class Pharmacy {
    constructor(drugs = []) {
        this.drugs = drugs;
    }

    updateBenefitValue() {
        return this.drugs.map(currentDrug => {
            if(canDecreaseBenefit(currentDrug.name)) {
                currentDrug.benefit = getDecreaseBenefit(currentDrug);
            } else {
                currentDrug.benefit = getIncreaseBenefit(currentDrug);
            }

            currentDrug.expiresIn = getDecreaseExpiry(currentDrug);

            if(currentDrug.expiresIn < 0) {
                currentDrug.benefit = getHerbalTeaBenefit(currentDrug);
                currentDrug.benefit = getFervexExpiryBenefit(currentDrug);
                currentDrug.benefit = getDecreaseExpiryBenefit(currentDrug);
            }

            if(currentDrug.benefit > 50) {
                currentDrug.benefit = 50;
            }
            if(currentDrug.benefit < 0) {
                currentDrug.benefit = 0;
            }

            return currentDrug;
        });
    }
}
