import React from "react";
import Meal from "./Meal.jsx";

export default function MealGenerator({ meals, nutrients, refreshMeals }) {
  return (
    <div>
      <h2>Daily Meal Plan</h2>
      <p>Meals generated based on 2000 calorie daily average</p>
      <input type="button" onClick={refreshMeals}>
        Refresh
      </input>
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
