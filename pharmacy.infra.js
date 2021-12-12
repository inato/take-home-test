/* eslint-disable prettier/prettier */
export const canDecreaseBenefit = drugName => {
    const drugsWithoutDecreaseList = ['Herbal Tea', 'Fervex'];
    return !drugsWithoutDecreaseList.includes(drugName);
};

export const getDecreaseBenefit = ({benefit, name}) => {
    if(name !== 'Magic Pill') {
        benefit--;
    }

    return benefit;
};

export const getFervexBenefits = ({benefit, expiresIn}) => {
    if(expiresIn < 11) {
        benefit++;
    }
    if(expiresIn < 6) {
        benefit++;
    }
    return benefit;
};

export const getIncreaseBenefit = ({benefit, expiresIn, name}) => {
    benefit++;
    if(name === 'Fervex') {
        benefit = getFervexBenefits({benefit, expiresIn});
    }

    return benefit;
};

export const getDecreaseExpiry = ({expiresIn, name}) => {
    name !== 'Magic Pill' && expiresIn--;
    return expiresIn;
};

export const getHerbalTeaBenefit = ({benefit, name}) => {
    if(name === 'Herbal Tea') {
        benefit += 2;
    }
    return benefit;
};

export const getFervexExpiryBenefit = ({benefit, name}) => name === 'Fervex' ? 0 : benefit;

export const getDecreaseExpiryBenefit = ({benefit, name}) => {
    name !== 'Magic Pill' && benefit--;

    return benefit;
};
