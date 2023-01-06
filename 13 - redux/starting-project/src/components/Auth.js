import { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store";
import classes from "./Auth.module.css";

const Auth = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = email.includes("@") && password.trim().length > 3;
  const submitHandler = (event) => {
    event.preventDefault();

    if (!isFormValid) {
      throw new Error("invalid form");
    }

    console.log(email, password);
    dispatch(authActions.login({ email, password }));
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button
            disabled={!isFormValid}
            style={
              !isFormValid ? { background: "gray", color: "lightgray" } : {}
            }
          >
            Login
          </button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
