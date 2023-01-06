import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isAdding, setIsAdding] = useState(false);
  const handleAddingNewExpanse = () => {
    setIsAdding(true);
  };
  const cancelAddingNewExpanse = () => {
    setIsAdding(false);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsAdding(false);
  };

  return (
    <div className="new-expense">
      {!isAdding ? (
        <button onClick={handleAddingNewExpanse}>Add New Expanse</button>
      ) : (
        <ExpenseForm
          onCancel={cancelAddingNewExpanse}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
