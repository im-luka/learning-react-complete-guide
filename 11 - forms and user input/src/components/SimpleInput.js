import React, { useEffect, useRef, useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  // const nameInputRef = useRef("");

  // const [enteredName, setEnteredName] = useState("");
  // const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  // const [formIsValid, setFormIsValid] = useState(false);

  const nameValidation = useInput((value) => value.trim() !== "");

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  // const enteredNameIsValid = enteredName.trim() !== "";
  // const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredEmailIsValid = {
    required: enteredEmail.trim() !== "",
    email: enteredEmail.includes("@"),
  };
  const emailInputIsInvalid =
    (!enteredEmailIsValid.required || !enteredEmailIsValid.email) &&
    enteredEmailTouched;

  let formIsValid = false;
  if (
    nameValidation.isValid &&
    enteredEmailIsValid.required &&
    enteredEmailIsValid.email
  ) {
    formIsValid = true;
  }

  // useEffect(() => {
  //   if (enteredNameIsValid) {
  //     setFormIsValid(true);
  //   } else {
  //     setFormIsValid(false);
  //   }
  // }, [enteredNameIsValid]);

  // const nameInputChangeHandler = (event) => {
  //   setEnteredName(event.target.value);
  // };

  // const nameInputBlurHandler = (event) => {
  //   setEnteredNameTouched(true);
  // };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!nameValidation.isValid) {
      return;
    }

    console.log(`${nameValidation.value} ${enteredEmail}`);
    nameValidation.reset();
    setEnteredEmail("");
    setEnteredEmailTouched(false);

    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue);
    // nameInputRef.current.value = ""; // => NOT IDEAL
  };

  const inputClasses = {
    name: nameValidation.enteredValueIsInvalid
      ? "form-control invalid"
      : "form-control",
    email: emailInputIsInvalid ? "form-control invalid" : "form-control",
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={inputClasses.name}>
        <label htmlFor="name">Your Name</label>
        <input
          // ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameValidation.valueInputChangeHandler}
          onBlur={nameValidation.valueInputBlurHandler}
          value={nameValidation.value}
        />
        {nameValidation.enteredValueIsInvalid && (
          <p className="error-text">Name is required!</p>
        )}
      </div>
      <div className={inputClasses.email}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && !enteredEmailIsValid.required && (
          <p className="error-text">Email is required!</p>
        )}
        {emailInputIsInvalid &&
          !enteredEmailIsValid.email &&
          enteredEmailIsValid.required && (
            <p className="error-text">Email must contain @ symbol!</p>
          )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
