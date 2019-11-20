import React from "react";

const MacroCalculator = () => {
  return (
    <div>
      <form action="">
        <label htmlFor="height-input">Height</label>
        <input type="text" id="height-input" />
        <label htmlFor="weight-input"> Weight </label>
        <input type="text" id="weight-input" />
        <label htmlFor="age-input">Age</label>
        <input type="number" id="age-input" />
      </form>
    </div>
  );
};

export default MacroCalculator;
