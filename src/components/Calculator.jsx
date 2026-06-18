import Button from "./Button";
import Display from "./Display";
import { useCalculator } from "../hooks/useCalculator";

function Calculator() {
  const { display, handleButtonClick } =
    useCalculator();

  const buttons = [
    "C",
    "⌫",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];

  return (
    <div className="w-full max-w-sm mx-auto bg-black p-4 rounded-3xl shadow-2xl border border-gray-800">
      <Display value={display} />
      <div className="grid grid-cols-4 gap-3 auto-rows-[64px] sm:auto-rows-[72px] md:auto-rows-[80px] mt-4">
        {buttons.map((btn) => (
          <Button
            key={btn}
            value={btn}
            onClick={handleButtonClick}
            className={
                btn === "="
                    ? "col-span-2 bg-orange-500 hover:bg-orange-400"
                    : ["+", "-", "*", "/"].includes(btn)
                    ? "bg-orange-500 hover:bg-orange-400"
                    : ""
            }
          />
        ))}
      </div>
    </div>
  );
}

  export default Calculator;