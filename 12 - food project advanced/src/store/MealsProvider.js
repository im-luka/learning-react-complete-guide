import React, { useReducer } from "react";

import MealsContext from "./meals-context";

const initialState = {
  meals: [],
};

const mealsReducer = async (state, action) => {
  if (action.type === "GET") {
    let mealsList = [];
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_KEY}meals.json`
      );
      const data = await response.json();

      for (const key in data) {
        const meal = {
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        };
        mealsList.push(meal);
      }
    } catch (error) {
      console.log(error.message);
    }

    return {
      meals: mealsList,
    };
  }
  if (action.type === "POST") {
  }
  return initialState;
};

const MealsProvider = (props) => {
  const [mealsState, dispatch] = useReducer(mealsReducer, initialState);

  const getAllMealsHandler = () => {
    dispatch({ type: "GET" });
  };

  const addNewMealHandler = (meal) => {
    dispatch({ type: "POST", meal: meal });
  };

  const mealsContext = {
    meals: mealsState.meals,
    getAllMeals: getAllMealsHandler,
    addNewMeal: addNewMealHandler,
  };

  return (
    <MealsContext.Provider value={mealsContext}>
      {props.children}
    </MealsContext.Provider>
  );
};

export default MealsProvider;
