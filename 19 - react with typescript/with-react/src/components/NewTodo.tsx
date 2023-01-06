import React, { useContext, useRef } from "react";
import { TodosContext } from "../store/todos-context";
import styles from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const todoCtx = useContext(TodosContext);
  const textRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = textRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    todoCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <label htmlFor="text">Todo Text</label>
      <input ref={textRef} type="text" id="text" />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
