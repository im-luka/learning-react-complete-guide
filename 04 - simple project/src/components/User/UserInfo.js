import React from "react";

import styles from "./UserInfo.module.css";

const UserInfo = (props) => {
  return (
    <div className={styles["container-info"]}>
      {props.username} ({props.age} years old)
    </div>
  );
};

export default UserInfo;
