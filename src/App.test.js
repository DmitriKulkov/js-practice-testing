// import { render, screen } from '@testing-library/react';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

export const enterNumbers = (a, b) => {
  userEvent.type(screen.getByTestId("first-element"), `${a}`);
  userEvent.type(screen.getByTestId("second-element"), `${b}`);
};

const ops = {
  sum: (a, b) => a + b,
  subt: (a, b) => a - b,
  mult: (a, b) => a * b,
  div: (a, b) => a / b,
};

const onPlusClicked = (a, b) =>
  test("onPlusClicked & printResult", () => {
    render(<App />);
    enterNumbers(a, b);
    plusClicked(a, b);
  });
export const plusClicked = (a, b) => {
  userEvent.click(screen.getByText(/\+/, { selector: "button" }));
  expectResult(a, b, "sum");
};
const onMinusClicked = (a, b) =>
  test("onMinusClicked & printResult", () => {
    render(<App />);
    enterNumbers(a, b);
    minusClicked(a, b);
  });
export const minusClicked = (a, b) => {
  userEvent.click(screen.getByText(/-/, { selector: "button" }));
  expectResult(a, b, "subt");
};
export const expectResult = (a, b, op) => {
  expect(screen.getByTestId("result")).toHaveTextContent(`${ops[op](a, b)}`);
};
const onMultiplyClicked = (a, b) =>
  test("onMultiplyClicked & printResult", () => {
    render(<App />);
    enterNumbers(a, b);
    multiplyClicked(a, b);
  });
export const multiplyClicked = (a, b) => {
  userEvent.click(screen.getByText(/\*/, { selector: "button" }));
  expectResult(a, b, "mult");
};
const onDivideClicked = (a, b) =>
  test("onDivideClicked & printResult", () => {
    render(<App />);
    enterNumbers(a, b);
    divideClicked(a, b);
  });
export const divideClicked = (a, b) => {
  userEvent.click(screen.getByText(/\//, { selector: "button" }));
  expectResult(a, b, "div");
};

const eventTests = [
  onPlusClicked,
  onMinusClicked,
  onMultiplyClicked,
  onDivideClicked,
];

describe("Events & Print result", () => {
  for (const eventTest of eventTests) {
    const a = Math.random() * 10 + 1;
    const b = Math.random() * 10 + 1;
    eventTest(a, b);
  }
});
