import { sum, subtract, multiply, divide } from ".";
import * as View from "../CalculatorView";

jest.mock("../CalculatorView");

const test_sum = (message, a, b) =>
  test(message, () => {
    expect(sum(a, b)).toBe(a + b);
  });

const test_subtrasct = (message, a, b) =>
  test(message, () => {
    expect(subtract(a, b)).toBe(a - b);
  });

const test_multiply = (message, a, b) =>
  test(message, () => {
    expect(multiply(a, b)).toBe(a * b);
  });

const test_divide = (message, a, b) =>
  test(message, () => {
    expect(divide(a, b)).toBe(b === 0 ? NaN : a / b);
  });

const test_divide_by_zero = (a, b) =>
  test("display division by zero error", () => {
    const spy = jest.spyOn(View, "displayError");
    divide(a, b);
    expect(spy).toHaveBeenCalledWith("division by zero");
  });

const funcs = {
  sum: test_sum,
  subtract: test_subtrasct,
  multiply: test_multiply,
  divide: test_divide,
};

describe("Calculator interface functions", () => {
  for (const func of Object.entries(funcs)) {
    describe(`${func[0]} function`, () => {
      let a = Math.random() * 10;
      let b = Math.random() * 10;
      func[1](`${func[0]} ${a} & ${b}(a & b positive)`, a, b);

      b = -b;
      func[1](`${func[0]} ${a} & ${b}(a positive, b negative)`, a, b);

      b = 0;
      func[1](`${func[0]} ${a} & ${b}(b = 0)`, a, b);
      if (func[0] === "divide") {
        test_divide_by_zero(a, b);
      }

      b = a;
      a = -a;
      func[1](`${func[0]} ${a} & ${b}(a negative, b positive)`, a, b);

      a = 0;
      func[1](`${func[0]} ${a} & ${b}(a = 0)`, a, b);

      b = 0;
      func[1](`${func[0]} ${a} & ${b}(a,b = 0)`, a, b);
      if (func[0] === "divide") {
        test_divide_by_zero(a, b);
      }
    });
  }
});
