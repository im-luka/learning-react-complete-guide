import React, { useState } from "react";

import styles from "./MealsForm.module.css";
import NewMealForm from "./NewMealForm";

const MealsForm = () => {
  const [isAdding, setIsAdding] = useState(false);

  const addingHandle = () => {
    setIsAdding((prevstate) => !prevstate);
  };

  return (
    <div className={styles.container}>
      <button
        onClick={addingHandle}
        className={!isAdding ? styles.add : styles.cancel}
      >
        {!isAdding ? "Add New Meal" : "Cancel"}
      </button>
      {isAdding && <NewMealForm />}
    </div>
  );
};

export default MealsForm;
