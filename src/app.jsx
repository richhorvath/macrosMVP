import React, { useState, useEffect } from "react";
import MacroCalculator from "./client/MacroCalculator.jsx";
import MealGenerator from "./client/MealGenerator.jsx";
import axios from "axios";
import API_KEY from "../config.js";
export default function App() {
  const [meals, setMeals] = useState([]);
  const [nutrients, setNutrients] = useState({});

  const getMeals = (calories = 2000, timeFrame = "day") => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/mealplans/generate?apiKey=${API_KEY}&calorieTarget=${calories}&timeFrame=${timeFrame}`
      )
      .then(results => {
        setMeals(results.data.meals);
        setNutrients(results.data.nutrients);
      });
  };

  useEffect(() => {
    getMeals();
  }, []);
  return (
    <div>
      {meals.length === 0 ? (
        "loading..."
      ) : (
        <div>
          <MacroCalculator />
          <MealGenerator
            meals={meals}
            nutrients={nutrients}
            refreshMeals={getMeals}
          />{" "}
        </div>
      )}
    </div>
  );
}
