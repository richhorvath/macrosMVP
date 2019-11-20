import React, { useState, useEffect } from "react";

const MacroCalculator = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [age, setAge] = useState(0);
  const [activity, setActivity] = useState(0);
  const [bmr, setbmr] = useState(0);

  useEffect(() => {
    setbmr(66 + 6.3 * weight + 12.9 * height - 6.8 * age);
  }, [height, weight, age]);
  useEffect(() => {
    console.log(bmr);
  }, [bmr]);
  return (
    <div>
      <form action="">
        {/* <label htmlFor="height-input">Height</label> */}
        {/* <input
          onChange={event => {
            setHeight(event.target.value);
          }}
          type="number"
          id="height-input"
        /> */}
        {/* <label htmlFor="weight-input"> Weight </label>
        <input
          onChange={event => {
            setWeight(event.target.value);
          }}
          type="number"
          id="weight-input"
        />
        <label htmlFor="age-input">Age</label>
        <input
          onChange={event => {
            setAge(event.target.value);
          }}
          type="number"
          id="age-input"
        /> */}
        {/* <input type="radio" name="activity" value="1.2">
          If you are sedentary (little or no exercise)
        </input> */}
        {/* <input type="radio" name="activity" value="1.375">
          If you are lightly active (light exercise/sports 1-3 days/week)
        </input>
        <input type="radio" name="activity" value="1.55">
          If you are moderately active (moderate exercise/sports 3-5 days/week){" "}
        </input>
        <input type="radio" name="activity" value="1.725">
          If you are very active (hard exercise/sports 6-7 days a week)
        </input>
        <input type="radio" name="activity" value="1.9">
          If you are extra active (very hard exercise/sports & physical job or
          2x training)
        </input> */}
      </form>
    </div>
  );
};

export default MacroCalculator;
