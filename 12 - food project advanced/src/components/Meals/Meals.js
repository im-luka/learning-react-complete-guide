import React from "react";
import MealsAvailable from "./MealsAvailable";
import MealsForm from "./MealsForm";
import MealsSummary from "./MealsSummary";

const Meals = () => {
  return (
    <>
      <MealsSummary />
      <MealsAvailable />
      <MealsForm />
    </>
  );
};

export default Meals;
