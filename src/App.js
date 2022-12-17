import { Button } from "@mui/material";
import { useState } from "react";
import { sum, subtract, multiply, divide } from "./utils/Calculator";
import { displayError } from "./utils/CalculatorView";
import "./App.css";

function App() {
  const [first, setFirst] = useState("0");
  const [second, setSecond] = useState("0");
  const [sign, setSign] = useState("+");
  const [result, setResult] = useState("0");
  /**
   * Отображает результат вычисления
   */
  const printResult = (result) => {
    setResult(result);
  };

  /**
   * Вызывается формой в тот момент, когда пользователь нажал на кнопку '+'
   */
  const onPlusClicked = () => {
    if (checkValue(first) && checkValue(second)) {
      setSign("+");
      printResult(sum(first, second));
    } else {
      console.log("wrong value");
    }
  };

  /**
   * Вызывается формой в тот момент, когда пользователь нажал на кнопку '-'
   */
  const onMinusClicked = () => {
    if (checkValue(first) && checkValue(second)) {
      setSign("-");
      printResult(subtract(first, second));
    } else {
      console.log("wrong value");
    }
  };

  /**
   * Вызывается формой в тот момент, когда пользователь нажал на кнопку '/'
   */
  const onDivideClicked = () => {
    if (checkValue(first) && checkValue(second)) {
      setSign("/");
      const result = divide(first, second);
      if (!isNaN(result)) {
        printResult(divide(first, second));
      }
    } else {
      console.log("wrong value");
    }
  };

  /**
   * Вызывается формой в тот момент, когда пользователь нажал на кнопку '*'
   */
  const onMultiplyClicked = () => {
    if (checkValue(first) && checkValue(second)) {
      setSign("*");
      printResult(multiply(first, second));
    } else {
      console.log("wrong value");
    }
  };

  const checkValue = (value) => {
    return !(isNaN(parseFloat(value)) || parseFloat(value) === Infinity);
  };

  const inputHandler = (event) => {
    try {
      if (event.target.id === "first") {
        setFirst(event.target.value);
      } else if (event.target.id === "second") {
        setSecond(event.target.value);
      }
    } catch (e) {
      displayError(e.message);
    }
  };

  const btns = {
    "+": onPlusClicked,
    "-": onMinusClicked,
    "*": onMultiplyClicked,
    "/": onDivideClicked,
  };

  return (
    <div className="App">
      <div className="calc">
        <div className="calc__input_container">
          <input
            data-testid="first-element"
            id="first"
            className="calc__input"
            value={first}
            onChange={inputHandler}
          />
          <label className="calc__input">{sign}</label>
          <input
            data-testid="second-element"
            id="second"
            className="calc__input"
            value={second}
            onChange={inputHandler}
          />
          <span>=</span>
          <label data-testid="result" className="calc__result">
            {result}
          </label>
        </div>
        <div className="calc__btn_container">
          {Object.entries(btns).map((k) => (
            <Button key={k[0]} variant="outlined" onClick={k[1]}>
              {k[0]}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
