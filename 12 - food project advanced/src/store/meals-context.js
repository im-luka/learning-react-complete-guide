import React from "react";

const MealsContext = React.createContext({
  meals: [],
  getAllMeals: () => {},
  addNewMeal: (meal) => {},
});

export default MealsContext;
