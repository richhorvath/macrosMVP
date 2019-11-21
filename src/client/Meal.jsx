import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Meal({ meal }) {
  const [nutrition, setNutrition] = useState({});
  let API_KEY = process.env.API_KEY;

  const getNutrition = () => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/${meal.id}/nutritionWidget.json?apiKey=${API_KEY}`
      )
      .then(results => {
        let data = results.data;
        delete data.bad;
        delete data.good;
        console.log(data);
        setNutrition(data);
      });
  };
  useEffect(() => {
    getNutrition();
  }, [meal]);
  return (
    <div>
      <h2>{meal.title}</h2>
      <img
        src={`https://spoonacular.com/recipeImages/${meal.id}-240x150.jpg`}
      ></img>
      <p>calories: {nutrition.calories}</p>
      <p>carbs: {nutrition.carbs}</p>
      <p>protein: {nutrition.protein}</p>
      <p>fat: {nutrition.fat}</p>

      <p>ready in {meal.readyInMinutes} minutes </p>
      <p>{meal.servings} servings</p>
    </div>
  );
}
