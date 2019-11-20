import React, { useState, useEffect } from "react";
import MacroCalculator from "./client/MacroCalculator.jsx";
import MealGenerator from "./client/MealGenerator.jsx";
import axios from "axios";
import API_KEY from "../config.js";
export default function App() {
  const [meals, setMeals] = useState([]);
  const [nutrients, setNutrients] = useState({});
  const [calories, setCalories] = useState(0);

  const getMeals = (calories = 2000, timeFrame = "day") => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/mealplans/generate?apiKey=${API_KEY}&targetCalories=${calories}&timeFrame=${timeFrame}`
      )
      .then(results => {
        setMeals(results.data.meals);
        setNutrients(results.data.nutrients);
      });
  };

  useEffect(() => {
    console.log(calories);
  }, [calories]);
  return (
    <div>
      <MacroCalculator setCalories={setCalories} getMeals={getMeals} />
      <button
        onClick={() => {
          getMeals(calories);
        }}
      >
        Generate Meals
      </button>
      {meals.length === 0 ? null : (
        <div>
          <MealGenerator
            meals={meals}
            nutrients={nutrients}
            refreshMeals={getMeals}
            calories={calories}
          />{" "}
        </div>
      )}
    </div>
  );
}
