import React, { useState, useRef } from "react";

import styles from "./UserForm.module.css";
import Wrapper from "../Helpers/Wrapper";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const UserForm = (props) => {
  const usernameInputRef = useRef();
  const ageInputRef = useRef();

  const [_error, setError] = useState();
  // const [_username, setUsername] = useState("");
  // const [_age, setAge] = useState("");

  // const usernameHandler = (event) => {
  //   setUsername(event.target.value);
  // };

  // const ageHandler = (event) => {
  //   setAge(event.target.value);
  // };

  const addUser = (event) => {
    event.preventDefault();

    const enteredUsername = usernameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid username",
        message: "Please enter both username and age",
      });
      return;
    }
    if (enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter age greater than 0",
      });
      return;
    }

    const newUser = {
      username: enteredUsername,
      age: enteredAge,
    };

    props.onNewUserAdded(newUser);
    // setUsername("");
    // setAge("");
    usernameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {_error && (
        <ErrorModal
          title={_error.title}
          message={_error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card>
        <form onSubmit={addUser}>
          <div className={styles["form-container"]}>
            <label className={styles["form-label"]} htmlFor="username">
              Username
            </label>
            <br />
            <input
              id="username"
              type="text"
              // value={_username}
              // onChange={usernameHandler}
              ref={usernameInputRef}
            />
          </div>

          <div className={styles["form-container"]}>
            <label className={styles["form-label"]} htmlFor="age">
              Age (Years)
            </label>
            <br />
            <input
              id="age"
              type="number"
              // value={_age}
              // onChange={ageHandler}
              ref={ageInputRef}
            />
          </div>

          <Button type="submit" className={`${styles["form-container"]}`}>
            Add User
          </Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default UserForm;
