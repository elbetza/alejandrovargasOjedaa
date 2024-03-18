import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  constructor() { }

  // Método para sumar dos números
  sumar(num1: number, num2: number): number {
    return num1 + num2;
  }

  // Método para restar dos números
  restar(num1: number, num2: number): number {
    return num1 - num2;
  }

  // Método para multiplicar dos números
  multiplicar(num1: number, num2: number): number {
    return num1 * num2;
  }

  // Método para dividir dos números
  dividir(num1: number, num2: number): number {
    if (num2 === 0) {
      throw new Error('No se puede dividir por cero');
    }
    return num1 / num2;
  }
}
