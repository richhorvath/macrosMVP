import React, { useState } from "react";

export default function Macronutrients({ calories }) {
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

  return (
    <div className="macronutrient-display">
      <div className="macros">
        <h3>Daily target macronutrients</h3>
        <p>Carbohydrates: {getMacro(carbs, 4)}</p>
        <p>Protein: {getMacro(protein, 4)}</p>
        <p>Fats: {getMacro(fat, 9)}</p>
      </div>
      <div className="macro-slider">
        <label>
          <input
            type="range"
            value={carbs * 100}
            onChange={event => {
              setCarbs(event.target.value / 100);
            }}
          />
          Carbohydrates {carbs * 100} %
        </label>
        <label>
          <input
            type="range"
            value={protein * 100}
            onChange={event => {
              setProtein(event.target.value / 100);
            }}
          />
          Protein {protein * 100} %
        </label>
        <label>
          <input
            type="range"
            value={fat * 100}
            onChange={fat => {
              setFat(event.target.value / 100);
            }}
          />
          Fats {fat * 100} %
        </label>
      </div>
    </div>
  );
}
