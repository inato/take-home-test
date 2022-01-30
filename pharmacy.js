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
        this.decreaseProperty(item, property, 1);
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
      this.manageItemsBenefit(this.drugs[i]);
      this.manageItemsExpiracy(this.drugs[i]);
      this.verifyItemBenefit(this.drugs[i]);
    //   if (
    //     this.drugs[i].name != "Herbal Tea" &&
    //     this.drugs[i].name != "Fervex"
    //   ) {
    //     if (this.drugs[i].benefit > 0) {
    //       if (this.drugs[i].name != "Magic Pill") {
    //         this.drugs[i].benefit = this.drugs[i].benefit - 1;
    //       }
    //     }
    //   } else {
    //     if (this.drugs[i].benefit < 50) {
    //       this.drugs[i].benefit = this.drugs[i].benefit + 1;
    //       if (this.drugs[i].name == "Fervex") {
    //         if (this.drugs[i].expiresIn < 11) {
    //           if (this.drugs[i].benefit < 50) {
    //             this.drugs[i].benefit = this.drugs[i].benefit + 1;
    //           }
    //         }
    //         if (this.drugs[i].expiresIn < 6) {
    //           if (this.drugs[i].benefit < 50) {
    //             this.drugs[i].benefit = this.drugs[i].benefit + 1;
    //           }
    //         }
    //       }
    //     }
    //   }
    //   if (this.drugs[i].name != "Magic Pill") {
    //     this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
    //   }
    //   if (this.drugs[i].expiresIn < 0) {
    //     if (this.drugs[i].name != "Herbal Tea") {
    //       if (this.drugs[i].name != "Fervex") {
    //         if (this.drugs[i].benefit > 0) {
    //           if (this.drugs[i].name != "Magic Pill") {
    //             this.drugs[i].benefit = this.drugs[i].benefit - 1;
    //           }
    //         }
    //       } else {
    //         this.drugs[i].benefit =
    //           this.drugs[i].benefit - this.drugs[i].benefit;
    //       }
    //     } else {
    //       if (this.drugs[i].benefit < 50) {
    //         this.drugs[i].benefit = this.drugs[i].benefit + 1;
    //       }
    //     }
    //   }
    }

    return this.drugs;
  }
}
