import React from "react";
import Meal from "./Meal.jsx";

export default function MealGenerator({
  meals,
  nutrients,
  refreshMeals,
  calories,
  getMeals
}) {
  return (
    <div>
      <h2>Daily Meal Plan</h2>
      <p>Meal Plan Based on {calories === 0 ? 2000 : calories} calorie diet</p>
      <button
        onClick={() => {
          refreshMeals(calories);
        }}
      >
        Refresh
      </button>
      <div>
        {meals.map(meal => {
          return <Meal key={meal.id} meal={meal} />;
        })}
      </div>
      <div>
        <h3>Daily Macronutrients</h3>
        <p>Calories: {nutrients.calories}</p>
        <p>Carbohydrates: {nutrients.carbohydrates}</p>
        <p>Fat: {nutrients.fat}</p>
        <p>Protein: {nutrients.protein}</p>
      </div>
    </div>
  );
}
