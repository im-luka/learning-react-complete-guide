import React, { useState } from "react";

import "./App.css";
import Wrapper from "./components/Helpers/Wrapper";
import UserForm from "./components/User/UserForm";
import UserOutput from "./components/User/UserOutput";

const DUMMY_OUTPUT = [
  { username: "Petra", age: 24 },
  { username: "Lux", age: 24 },
  { username: "Johnny", age: 47 },
];

const App = () => {
  const [users, setUsers] = useState(DUMMY_OUTPUT);

  const addUserHandler = (newUser) => {
    setUsers((prevstate) => {
      return [...prevstate, newUser];
    });
  };

  return (
    // ako kod ne podrzava ovo onda umjesto <> napisati React.Fragment
    // <React.Fragment>
    <>
      <UserForm onNewUserAdded={addUserHandler} />

      <UserOutput data={users} />
    </>
    // </React.Fragment>
  );
};

export default App;
