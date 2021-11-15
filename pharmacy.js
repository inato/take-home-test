export class Drug {
  constructor(name, expiresIn, benefit) {
    switch(name) {
      case 'Herbal Tea':
          return new HerbalTea(name, expiresIn, benefit);
      case 'Magic Pill':
          return new MagicPill(name, expiresIn, benefit);
      case 'Fervex':
          return new Fervex(name, expiresIn, benefit);
      case 'Dafalgan':
          return new Dafalgan(name, expiresIn, benefit);
      default:
          return new DefaultDrug(name, expiresIn, benefit);
    }
  }
}

export class MagicPill {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;  
  }
  updateBenefit() {}
}

export class DefaultDrug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;  
  }
  updateBenefit() {
    if (this.benefit > 0) {
      this.benefit--;
    }
    this.expiresIn--;
    if (this.expiresIn < 0) {
      this.benefit--;
    }
  }
}

export class Dafalgan {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;  
  }
  updateBenefit() {
    if (this.benefit > 0) {
      this.benefit--;
      if (this.benefit > 0) {
        this.benefit--;
      }
    }
    this.expiresIn--;
    if (this.expiresIn < 0) {
      this.benefit--;
      if (this.benefit > 0) {
        this.benefit--;
      }
    }
  }
}

export class HerbalTea {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;  
  }
  updateBenefit() {
    if (this.benefit < 50)
      this.benefit++;
    this.expiresIn--;

    if (this.expiresIn < 0) {
      if (this.benefit < 50)
        this.benefit++;
    }
  }
}

export class Fervex {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;  
  }

  updateBenefit() {
    this.expiresIn--;
    if (this.expiresIn < 0) {
      this.benefit = 0;
      return;
    }

    if (this.benefit < 50)
      this.benefit++;
    if (this.expiresIn < 11) {
      if (this.benefit < 50) {
        this.benefit++;
      }
    }
    if (this.expiresIn < 6) {
      if (this.benefit < 50) {
        this.benefit++;
      }
    }
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      this.drugs[i].updateBenefit();
    }
    return this.drugs;
  }
}