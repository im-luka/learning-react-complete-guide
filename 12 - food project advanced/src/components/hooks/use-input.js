import { useReducer } from "react";

const initialValue = {
  value: "",
  isBlur: false,
};

const inputReducer = (state, action) => {
  if (action.type === "CHANGE") {
    return {
      value: action.value,
      isBlur: state.isBlur,
    };
  }
  if (action.type === "BLUR") {
    return {
      value: state.value,
      isBlur: action.isBlur,
    };
  }
  return initialValue;
};

const useInput = (checkValidity) => {
  const [inputState, dispatch] = useReducer(inputReducer, initialValue);

  const isValid = checkValidity(inputState.value);

  const valueChangeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      value: event.target.value,
    });
  };

  const valueBlurHandler = () => {
    dispatch({
      type: "BLUR",
      isBlur: true,
    });
  };

  const reset = () => {
    dispatch({
      type: "RESET",
      value: "",
      isBlur: false,
    });
  };

  return {
    value: inputState.value,
    isBlur: inputState.isBlur,
    isValid,
    valueChangeHandler,
    valueBlurHandler,
    reset,
  };
};

export default useInput;
