import React from "react";

import styles from "./UserOutput.module.css";
import UserInfo from "./UserInfo";
import Card from "../UI/Card";

const UserOutput = (props) => {
  const users = [...props.data];

  return (
    <Card>
      {users.map((user) => {
        return (
          <UserInfo
            key={Math.random()}
            username={user.username}
            age={user.age}
          />
        );
      })}
    </Card>
  );
};

export default UserOutput;
