import React, { useState, useEffect } from "react";
import CalorieCalculator from "./client/CalorieCalculator.jsx";
import MealGenerator from "./client/MealGenerator.jsx";
import Macronutrients from "./client/Macronutrients.jsx";
import axios from "axios";
export default function App() {
  let API_KEY = process.env.API_KEY;

  const [meals, setMeals] = useState([]);
  const [nutrients, setNutrients] = useState({});
  const [calories, setCalories] = useState(0);
  const [protein, setProtein] = useState(0.3);
  const [carbs, setCarbs] = useState(0.4);
  const [fat, setFat] = useState(0.3);
  const getMacro = (percentageOfCalories, conversionRate) => {
    let caloriesFromNutrient = calories * percentageOfCalories;
    let gramsOfNutrient = Math.floor(caloriesFromNutrient / conversionRate);
    console.log("calories from nutrient", caloriesFromNutrient);
    console.log("grams", gramsOfNutrient);
    return gramsOfNutrient;
  };

  const getMeals = (calories = 2000, timeFrame = "day") => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/mealplans/generate?apiKey=$9da93ebbfea34b3fb91e490b11de913f&targetCalories=${calories}&timeFrame=${timeFrame}`
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
      <h1>MacroMe</h1>
      <p>Free meal plans fit for your needs</p>
      <CalorieCalculator setCalories={setCalories} getMeals={getMeals} />
      {calories === 0 ? null : (
        <p>Your need to eat {calories} calories to meet your goals</p>
      )}

      <Macronutrients
        calories={calories}
        getMacro={getMacro}
        protein={protein}
        setProtein={setProtein}
        carbs={carbs}
        setCarbs={setCarbs}
        fat={fat}
        setFat={setFat}
      />
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
