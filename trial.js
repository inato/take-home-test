export class Patient {
  constructor(disease, surgeryIn, value) {
    this.disease = disease;
    this.surgeryIn = surgeryIn;
    this.value = value;
  }
}

export class ClinicalTrial {
  constructor(patients = []) {
    this.patients = patients;
  }
  updateValue() {
    for (var i = 0; i < this.patients.length; i++) {
      if (
        this.patients[i].disease != "Multiple sclerosis" &&
        this.patients[i].disease != "Chronic obstructive pulmonary disease"
      ) {
        if (this.patients[i].value > 0) {
          if (this.patients[i].disease != "Pancreatic cancer") {
            this.patients[i].value = this.patients[i].value - 1;
          }
        }
      } else {
        if (this.patients[i].value < 50) {
          this.patients[i].value = this.patients[i].value + 1;
          if (
            this.patients[i].disease == "Chronic obstructive pulmonary disease"
          ) {
            if (this.patients[i].surgeryIn < 11) {
              if (this.patients[i].value < 50) {
                this.patients[i].value = this.patients[i].value + 1;
              }
            }
            if (this.patients[i].surgeryIn < 6) {
              if (this.patients[i].value < 50) {
                this.patients[i].value = this.patients[i].value + 1;
              }
            }
          }
        }
      }
      if (this.patients[i].disease != "Pancreatic cancer") {
        this.patients[i].surgeryIn = this.patients[i].surgeryIn - 1;
      }
      if (this.patients[i].surgeryIn < 0) {
        if (this.patients[i].disease != "Multiple sclerosis") {
          if (
            this.patients[i].disease != "Chronic obstructive pulmonary disease"
          ) {
            if (this.patients[i].value > 0) {
              if (this.patients[i].disease != "Pancreatic cancer") {
                this.patients[i].value = this.patients[i].value - 1;
              }
            }
          } else {
            this.patients[i].value =
              this.patients[i].value - this.patients[i].value;
          }
        } else {
          if (this.patients[i].value < 50) {
            this.patients[i].value = this.patients[i].value + 1;
          }
        }
      }
    }

    return this.patients;
  }
}
