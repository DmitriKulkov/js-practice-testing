import { render } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import App from "./App";
import {
  divideClicked,
  enterNumbers,
  expectResult,
  minusClicked,
  multiplyClicked,
  plusClicked,
} from "./App.test";

const feature = loadFeature("src/App.feature");

defineFeature(feature, (test) => {
  let a = 0;
  let b = 0;
  test("Sum", ({ given, when, then, and }) => {
    given("Calculator", () => {
      render(<App />);
    });

    when("I enter 2 numbers", (table) => {
      const parsed = table[0];
      a = parseInt(parsed["first"]);
      b = parseInt(parsed["second"]);
      enterNumbers(a, b);
    });

    and("Click plus button", () => {
      plusClicked(a, b);
    });

    then("I receive sum of that numbers", () => {
      expectResult(a, b, "sum");
    });
  });
  test("Subtract", ({ given, when, then, and }) => {
    given("Calculator", () => {
      render(<App />);
    });

    when("I enter 2 numbers", (table) => {
      const parsed = table[0];
      a = parseInt(parsed["first"]);
      b = parseInt(parsed["second"]);
      enterNumbers(a, b);
    });

    and("Click minus button", () => {
      minusClicked(a, b);
    });

    then("I receive subtract of that numbers", () => {
      expectResult(a, b, "subt");
    });
  });
  test("Multiply", ({ given, when, then, and }) => {
    given("Calculator", () => {
      render(<App />);
    });

    when("I enter 2 numbers", (table) => {
      const parsed = table[0];
      a = parseInt(parsed["first"]);
      b = parseInt(parsed["second"]);
      enterNumbers(a, b);
    });

    and("Click multiply button", () => {
      multiplyClicked(a, b);
    });

    then("I receive multiply of that numbers", () => {
      expectResult(a, b, "mult");
    });
  });
  test("Division", ({ given, when, then, and }) => {
    given("Calculator", () => {
      render(<App />);
    });

    when("I enter 2 numbers", (table) => {
      const parsed = table[0];
      a = parseInt(parsed["first"]);
      b = parseInt(parsed["second"]);
      enterNumbers(a, b);
    });

    and("Click divide button", () => {
      divideClicked(a, b);
    });

    then("I receive division of that numbers", () => {
      expectResult(a, b, "div");
    });
  });

  // test("Subtract", ({ given, when, then }) => {
  //   given("Calculator", () => {
  //     render(<App />);
  //   });
  //   when("I enter 2 numbers and click minus button", (table) => {
  //     const parsed = table[0];
  //     a = parsed["first"];
  //     b = parsed["second"];
  //     enterNumbers(a, b);
  //     minusClicked(a, b);
  //   });
  //   then("I receive subtract of that numbers", () => {
  //     expectResult(a, b, "subt");
  //   });
  // });
  // test("Multiply", ({ given, when, then }) => {
  //   given("Calculator", () => {
  //     render(<App />);
  //   });
  //   when("I enter 2 numbers and click multiply button", (table) => {
  //     const parsed = table[0];
  //     a = parsed["first"];
  //     b = parsed["second"];
  //     enterNumbers(a, b);
  //     multiplyClicked(a, b);
  //   });
  //   then("I receive multiply of that numbers", () => {
  //     expectResult(a, b, "mult");
  //   });
  // });
  // test("Division", ({ given, when, then }) => {
  //   given("Calculator", () => {
  //     render(<App />);
  //   });
  //   when("I enter 2 numbers and click divide button", (table) => {
  //     const parsed = table[0];
  //     a = parsed["first"];
  //     b = parsed["second"];
  //     enterNumbers(a, b);
  //     divideClicked(a, b);
  //   });
  //   then("I receive division of that numbers", () => {
  //     expectResult(a, b, "div");
  //   });
  // });
});
