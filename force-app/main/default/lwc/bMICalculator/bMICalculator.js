import { LightningElement,track } from "lwc";

export default class BMICalculator extends LightningElement {
   @track weight;
  @track height;

  get bmi() {
    if (this.weight && this.height) {
      let heightInMeters = (this.height/100);
      let  bmi = this.weight / (heightInMeters * heightInMeters);
      let finalBmi = bmi.toFixed(2);
      return finalBmi;
    } else {
      return '';
    }
  }

  get category() {
    const bmi = parseFloat(this.bmi);
    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
      return 'Normal';
    } else if (bmi >= 25 && bmi < 30) {
      return 'Overweight';
    } else {
      return 'Obese';
    }
  }
  get resultValueStyle() {
    const bmi = parseFloat(this.bmi);
    if (bmi < 18.5 || bmi >= 30) {
      return 'color: red';
    } else if (bmi >= 18.5 && bmi < 25) {
      return 'color: green';
    } else if (bmi >= 25 && bmi < 30) {
      return 'color: yellow';
    }
  }

  get categoryValueStyle() {
    const bmi = parseFloat(this.bmi);
    if (bmi < 18.5 || bmi >= 30) {
      return 'color: red';
    } else if (bmi >= 18.5 && bmi < 25) {
      return 'color: green';
    } else if (bmi >= 25 && bmi < 30) {
      return 'color: yellow';
    }
  }

  handleWeightChange(event) {
    this.weight = parseFloat(event.target.value);
  }

  handleHeightChange(event) {
    this.height = parseFloat(event.target.value);
  }

  calculateBMI() {
    if (this.weight > 0 && this.height > 0) {
      let heightInMeters = (this.height/100);
      let finalBmi = this.weight / (heightInMeters * heightInMeters);
      this.bmi = finalBmi.toFixed(2);
    }
  }
}