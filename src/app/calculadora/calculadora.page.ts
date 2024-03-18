import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
})
export class CalculadoraPage {
  result = '0';
  currentNumber = '0';
  firstOperand: number = 0;
  operator: string | null = null;
  waitForSecondNumber = false;
  
  buttons = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '=', '+'];

  buttonClicked(button: string) {
    if (button === 'C') {
      this.clear();
    } else if (button === '=') {
      this.calculate();
    } else if (button === '+' || button === '-' || button === '*' || button === '/') {
      this.setOperation(button);
    } else {
      this.inputDigit(button);
    }
  }

  clear() {
    this.result = '0';
    this.currentNumber = '0';
    this.firstOperand = 0;
    this.operator = null;
    this.waitForSecondNumber = false;
  }

  inputDigit(digit: string) {
    if (this.waitForSecondNumber) {
      this.currentNumber = digit;
      this.waitForSecondNumber = false;
    } else {
      this.currentNumber === '0' ? this.currentNumber = digit : this.currentNumber += digit;
    }
    this.result = this.currentNumber;
  }

  setOperation(operator: string) {
    if (this.firstOperand === null) {
      this.firstOperand = parseFloat(this.currentNumber);
    } else if (this.operator) {
      if (this.firstOperand !== null) {
        const result = this.calculateResult(parseFloat(this.currentNumber));
        this.result = result.toString();
        this.firstOperand = result;
      }
    }
    this.operator = operator;
    this.waitForSecondNumber = true;
  }

  calculateResult(secondOperand: number) {
    if (this.firstOperand !== null) {
      switch (this.operator ?? '') {
        case '+':
          return this.firstOperand + secondOperand;
        case '-':
          return this.firstOperand - secondOperand;
        case '*':
          return this.firstOperand * secondOperand;
        case '/':
          return this.firstOperand / secondOperand;
        default:
          return secondOperand;
      }
    }
    return secondOperand;
  }

  calculate() {
    if (this.operator && this.waitForSecondNumber) {
      if (this.firstOperand !== null) {
        const result = this.calculateResult(parseFloat(this.currentNumber));
        this.result = result.toString();
        this.firstOperand = result;
        this.operator = null;
        this.waitForSecondNumber = false;
      }
    }
  }
}
