import { useReducer, useState } from "react";

// WITH USE STATE
// const useFields = (checkValidity) => {
//   const [value, setValue] = useState("");
//   const [valueBlur, setValueBlur] = useState(false);
//   const isValueValid = checkValidity(value);

//   const valueChangeHandler = (event) => {
//     setValue(event.target.value);
//   };

//   const valueBlurHandler = () => {
//     setValueBlur(true);
//   };

//   const reset = () => {
//     setValue("");
//     setValueBlur(false);
//   };

//   return {
//     value,
//     valueBlur,
//     isValid: isValueValid,
//     valueChangeHandler,
//     valueBlurHandler,
//     reset,
//   };
// };

// WITH USE REDUCER
const initialState = {
  value: "",
  valueBlur: false,
};

const inputReducer = (state, action) => {
  if (action.type === "CHANGE") {
    return {
      value: action.value,
      valueBlur: state.valueBlur,
    };
  }
  if (action.type === "BLUR") {
    return {
      value: state.value,
      valueBlur: action.valueBlur,
    };
  }
  if (action.type === "RESET") {
    return {
      value: "",
      valueBlur: false,
    };
  }
  return initialState;
};

const useFields = (checkValidity) => {
  const [inputState, dispatch] = useReducer(inputReducer, initialState);
  const isValueValid = checkValidity(inputState.value);

  const valueChangeHandler = (event) => {
    dispatch({ type: "CHANGE", value: event.target.value });
  };

  const valueBlurHandler = () => {
    dispatch({ type: "BLUR", valueBlur: true });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    valueBlur: inputState.valueBlur,
    isValid: isValueValid,
    valueChangeHandler,
    valueBlurHandler,
    reset,
  };
};

export default useFields;
