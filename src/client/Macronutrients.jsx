import React from "react";

export default function Macronutrients({ calories }) {
  const getMacro = (percentageOfCalories, conversionRate) => {
    let caloriesFromNutrient = calories * percentageOfCalories;
    let gramsOfNutrient = Math.floor(caloriesFromNutrient / conversionRate);
    console.log("calories from nutrient", caloriesFromNutrient);
    console.log("grams", gramsOfNutrient);
    return gramsOfNutrient;
  };

  return (
    <div>
      <h3>Daily target macronutrients</h3>
      <p>Carbohydrates: {getMacro(0.4, 4)}</p>
      <p>Protein: {getMacro(0.3, 4)}</p>
      <p>Fats: {getMacro(0.3, 9)}</p>
    </div>
  );
}
