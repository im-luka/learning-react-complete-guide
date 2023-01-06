import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isAdding, setIsAdding] = useState(false);
  const handleAddingNewExpense = () => {
    setIsAdding(true);
  };
  const cancelAddingNewExpense = () => {
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
        <button onClick={handleAddingNewExpense}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onCancel={cancelAddingNewExpense}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
