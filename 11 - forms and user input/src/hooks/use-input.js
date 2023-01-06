import { useState } from "react";

const useInput = (checkValidity) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredValueTouched, setEnteredValueTouched] = useState();

  const enteredValueIsValid = checkValidity(enteredValue);
  const enteredValueIsInvalid = !enteredValueIsValid && enteredValueTouched;

  const valueInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const valueInputBlurHandler = (event) => {
    setEnteredValueTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setEnteredValueTouched("");
  };

  return {
    value: enteredValue,
    isValid: enteredValueIsValid,
    enteredValueIsInvalid,
    valueInputChangeHandler,
    valueInputBlurHandler,
    reset,
  };
};

export default useInput;
