import { useState } from "react";

const useInput = (regex) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  const inputChangeHandler = (event) => setEnteredValue(event.target.value);
  const inputBlurHandler = () => setIsFocus(true);

  const isValid = regex.test(enteredValue);
  const inValid = !isValid && isFocus;

  return {
    value: enteredValue,
    isValid,
    inValid,
    inputChangeHandler,
    inputBlurHandler,
  };
};

export default useInput;
