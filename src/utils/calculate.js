export function calculate(firstValue, secondValue, operator) {
  const a = Number(firstValue);
  const b = Number(secondValue);

  switch (operator) {
    case "+":
      return (a + b).toString();

    case "-":
      return (a - b).toString();

    case "*":
      return (a * b).toString();

    case "/":
      return b === 0
        ? "Error"
        : (a / b).toString();

    default:
      return secondValue;
  }
}