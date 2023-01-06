import React from "react";
import useInput from "../hooks/use-input";

import styles from "./NewMealForm.module.css";

const NewMealForm = (props) => {
  const nameInput = useInput((value) => value.trim().length > 0);
  const emailInput = useInput((value) => value.includes("@"));

  const isFormValid = nameInput.isValid && emailInput.isValid;
  const submitForm = (event) => {
    event.preventDefault();

    if (!isFormValid) {
      return;
    }

    console.log(nameInput.value, emailInput.value);

    props.onConfirm({
      name: nameInput.value,
      email: emailInput.value,
    });

    nameInput.reset();
    emailInput.reset();
  };

  const errorClasses = {
    nameError: !nameInput.isValid && nameInput.isBlur ? "invalid" : "",
    emailError: !emailInput.isValid && emailInput.isBlur ? "invalid" : "",
  };

  return (
    <form onSubmit={submitForm}>
      <div
        className={`${styles["form-control"]} ${
          styles[errorClasses.nameError]
        }`}
      >
        <label htmlFor="name">Your Name </label>
        <input
          type="text"
          id="name"
          value={nameInput.value}
          onChange={nameInput.valueChangeHandler}
          onBlur={nameInput.valueBlurHandler}
        />
        {!nameInput.isValid && nameInput.isBlur && (
          <p className={styles["error-text"]}>Name is required!</p>
        )}
      </div>

      <div
        className={`${styles["form-control"]} ${
          styles[errorClasses.emailError]
        }`}
      >
        <label htmlFor="address">Your Address </label>
        <input
          type="text"
          id="address"
          value={emailInput.value}
          onChange={emailInput.valueChangeHandler}
          onBlur={emailInput.valueBlurHandler}
        />
        {!emailInput.isValid && emailInput.isBlur && (
          <p className={styles["error-text"]}>E-mail must contain @!</p>
        )}
      </div>

      <button disabled={!isFormValid}>ORDER</button>
    </form>
  );
};

export default NewMealForm;
