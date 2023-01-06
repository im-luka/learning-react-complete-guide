import React, { useCallback, useEffect, useState } from "react";
import Card from "../UI/Card";

import styles from "./MealsAvailable.module.css";
import MealsItem from "./MealsItem";

const MealsAvailable = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_KEY}meals.json`
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      let mealsList = [];
      for (const key in data) {
        const meal = {
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        };
        mealsList.push(meal);
      }
      setMeals(mealsList);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      fetchMoviesHandler();
      setIsLoading(false);
    }, 500);
  }, [fetchMoviesHandler]);

  const mealsList = meals.map((meal) => (
    <MealsItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        {isLoading && <p className={styles.loading}>Loading...</p>}
        {error && <p className={styles.error}>{error}</p>}
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default MealsAvailable;
