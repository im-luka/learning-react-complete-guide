import React, { useState } from "react";
import Todo from "../models/todo";

const todosList = [new Todo("Learn React"), new Todo("Learn TypeScript")];

type Props = { children: React.ReactNode };

export const TodosContext = React.createContext<{
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
}>({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC<Props> = (props) => {
  const [todos, setTodos] = useState<Todo[]>(todosList);

  const addTodoHandler = (text: string) => {
    setTodos((prevstate) => [...prevstate, new Todo(text)]);
  };

  const removeTodoHandler = (id: string) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const contextValue = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
