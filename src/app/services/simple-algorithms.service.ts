import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimpleAlgorithmsService {

  constructor() { }

  esPrimo(n: number): number {
    if (n <= 1) {
      return 0;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) {
        return 0;
      }
    }
    return 1;
  }

  fibonacci(n: number): number[] {
    let fibonacciSequence: number[] = [];
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
      fibonacciSequence.push(a);
      let temp = a;
      a = b;
      b = temp + b;
    }
    return fibonacciSequence;
  }
}
