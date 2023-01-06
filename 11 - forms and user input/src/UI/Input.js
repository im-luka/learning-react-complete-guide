import React from "react";

const Input = (props) => {
  const objectInstance = { ...props.instance };

  return (
    <div className={props.className}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type || "text"}
        id={props.id}
        value={objectInstance.value}
        onChange={objectInstance.valueChangeHandler}
        onBlur={objectInstance.valueBlurHandler}
      />
      {!objectInstance.isValid && objectInstance.valueBlur && (
        <p className="error-text">{props.error}</p>
      )}
    </div>
  );
};

export default Input;
