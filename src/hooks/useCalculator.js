import { useState } from "react";
import { calculate } from "../utils/calculate";

export function useCalculator() {
  const [display, setDisplay] = useState("0");

  const [previousValue, setPreviousValue] = useState(null);

  const [operator, setOperator] = useState(null);

  const [waitingForOperand, setWaitingForOperand] =
    useState(false);

  const inputNumber = (num) => {
    if (num === ".") {
      if (waitingForOperand) {
        setDisplay("0.");
        setWaitingForOperand(false);
        return;
      }

      setDisplay((prev) =>
        prev.includes(".") ? prev : prev + "."
      );

      return;
    }

    if (waitingForOperand) {
      setDisplay(num);
      setWaitingForOperand(false);
      return;
    }

    setDisplay((prev) => (prev === "0" ? num : prev + num));
  };

  const inputOperator = (nextOperator) => {
    if (waitingForOperand) {
    setOperator(nextOperator);
    return;
  }
    if (previousValue === null) {
      setPreviousValue(display);
    } else if (operator) {
      const result = calculate(
        previousValue,
        display,
        operator
      );

      setDisplay(result);
      setPreviousValue(result);
    }

    setOperator(nextOperator);
    setWaitingForOperand(true);
  };

  const handleEqual = () => {
    if (!operator || previousValue === null) {
      return;
    }

    const result = calculate(
      previousValue,
      display,
      operator
    );

    setDisplay(result);
    setPreviousValue(null);
    setOperator(null);
    setWaitingForOperand(true);
  };

  const inputPercent = () => {
    if (display === "0") return;

    if (operator && previousValue !== null) {
      const a = Number(previousValue);
      const b = Number(display);
      const percentValue = (a * b) / 100;
      setDisplay(String(percentValue));
    } else {
      setDisplay(String(Number(display) / 100));
    }

    setWaitingForOperand(true);
  };

  const clear = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperator(null);
    setWaitingForOperand(false);
  };

  const deleteLast = () => {
    if (waitingForOperand) return;

    setDisplay((prev) =>
      prev.length === 1
        ? "0"
        : prev.slice(0, -1)
    );
  };

  const handleButtonClick = (value) => {
    switch (value) {
      case "C":
        clear();
        break;

      case "⌫":
        deleteLast();
        break;

      case "+":
      case "-":
      case "*":
      case "/":
        inputOperator(value);
        break;

      case "=":
        handleEqual();
        break;

      case "%":
        inputPercent();
        break;

      default:
        inputNumber(value);
    }
  };

  return {
    display,
    handleButtonClick,
  };
}