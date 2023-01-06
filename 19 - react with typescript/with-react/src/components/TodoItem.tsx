import React, { useContext } from "react";
import Todo from "../models/todo";
import { TodosContext } from "../store/todos-context";
import styles from "./TodoItem.module.css";

const TodoItem: React.FC<{ todo: Todo }> = (props) => {
  const todoCtx = useContext(TodosContext);

  const removeTodoHandler = () => {
    todoCtx.removeTodo(props.todo.id);
  };

  return (
    <li className={styles.item} onClick={removeTodoHandler}>
      {props.todo.text}
    </li>
  );
};

export default TodoItem;
