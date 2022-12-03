  import { displayError } from '../CalculatorView'
  
  /**
  * Вычисляет сумму двух чисел
  */
  export const sum = (a, b) => {
    return parseFloat(a) + parseFloat(b);
  };

  /**
   * Вычисляет разность двух чисел a - b
   */
  export const subtract = (a, b) => {
    return a - b;
  }

  /**
   * Вычисляет произведение двух чисел
   */
  export const multiply = (a, b) => {
    return a * b;
  }

  /**
   * Вычисляет отношение числа а к числу b.
   * Должен выбросить {@link java.lang.ArithmeticException} если |b| < 10e-8
   */
  export const divide = (a, b) => {
      if(b === 0){
      displayError('division by zero')
      return NaN
      } else  {
        return a / b
      }
  }