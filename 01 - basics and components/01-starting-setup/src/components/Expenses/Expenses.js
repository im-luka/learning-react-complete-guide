import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2022");

  const expenses = [...props.data];
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear() == filterYear;
  });

  const yearChangedHandler = (year) => {
    setFilterYear(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onYearChanged={yearChangedHandler}
          selectedYear={filterYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList data={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
