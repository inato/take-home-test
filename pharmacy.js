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

  decreaseProperty(item, property, value) {
    item[property] = item[property] - value;
  }

  increaseProperty(item, property, value) {
    item[property] = item[property] + value;
  }

  manageItemsBenefit(item) {
    const property = "benefit";

    switch (item.name) {
      case "Herbal Tea":
        if (item.expiresIn >= 0) {
          this.increaseProperty(item, property, 1);
        } else {
          this.increaseProperty(item, property, 2);
        }
      break;

      case "Fervex":
        if (item.expiresIn >= 0) {
          if (item.expiresIn <= 10 && item.expiresIn > 5) {
            this.increaseProperty(item, property, 2);
          } else if (item.expiresIn <= 5) {
            this.increaseProperty(item, property, 3);
          } else {
            this.increaseProperty(item, property, 1);
          }
        } else {
          item[property] = 0;
        }
      break;

      case "Magic Pill":
        break;

      case "Dafalgan":
        this.decreaseProperty(item, property, 2);
      break;

      default:
        if (item.expiresIn >= 0) {
          this.decreaseProperty(item, property, 1);
        } else {
          this.decreaseProperty(item, property, 2);

        }
        break;
      }
  }

  manageItemsExpiracy(item) {
    const property = "expiresIn";

    switch (item.name) {
      case "Magic Pill":
        break;

      default:
        this.decreaseProperty(item, property, 1);
        break;
    }
  }

  verifyItemBenefit(item) {
    if (item.benefit > 50)
      item.benefit = 50;

    if (item.benefit < 0)
      item.benefit = 0;
  }

  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      this.manageItemsExpiracy(this.drugs[i]);
      this.manageItemsBenefit(this.drugs[i]);
      this.verifyItemBenefit(this.drugs[i]);
    }

    return this.drugs;
  }
}
