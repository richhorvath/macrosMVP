import React, { useState, useEffect } from "react";

const MacroCalculator = ({ setCalories }) => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [age, setAge] = useState(0);
  const [activity, setActivity] = useState(0);
  const [bmr, setbmr] = useState(0);
  const [goal, setGoal] = useState(0);
  const [gender, setGender] = useState("male");

  const maleCalories = (weight, height, age) => {
    return 66 + 6.3 * weight + 12.9 * height - 6.8 * age;
  };
  const femaleCalories = (weight, height, age) => {
    return 665 + 4.3 * weight + 4.7 * height - 4.7 * age;
  };
  useEffect(() => {
    if (gender === "male") {
      setbmr(maleCalories(weight, height, age));
    } else {
      setbmr(femaleCalories(weight, height, age));
    }
  }, [height, weight, age, gender]);
  useEffect(() => {
    setCalories(Math.floor(bmr * activity) + Number(goal));
  }, [bmr, activity, goal]);

  const handleActivity = event => {
    setActivity(event.target.value);
  };

  const handleGoal = event => {
    setGoal(event.target.value);
  };
  return (
    <div>
      <form action="">
        <label htmlFor="height-input">Height</label>
        <input
          onChange={event => {
            setHeight(event.target.value);
          }}
          type="number"
          id="height-input"
        />
        <label htmlFor="weight-input"> Weight </label>
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
        />
        <label>
          Gender
          <select
            onChange={event => {
              setGender(event.target.value);
            }}
            className="gender-selector"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>

        <h2>Activity Level</h2>
        <div className="activity-radios">
          <label>
            <input
              type="radio"
              onChange={handleActivity}
              name="activity"
              checked={activity === "1.2"}
              value="1.2"
            ></input>
            If you are sedentary (little or no exercise)
          </label>
          <label>
            <input
              type="radio"
              onChange={handleActivity}
              name="activity"
              checked={activity === "1.375"}
              value="1.375"
            ></input>
            If you are lightly active (light exercise/sports 1-3 days/week)
          </label>
          <label>
            <input
              type="radio"
              onChange={handleActivity}
              name="activity"
              checked={activity === "1.55"}
              value="1.55"
            ></input>
            If you are moderately active (moderate exercise/sports 3-5
            days/week)
          </label>
          <label>
            <input
              type="radio"
              onChange={handleActivity}
              name="activity"
              checked={activity === "1.725"}
              value="1.725"
            ></input>
            If you are very active (hard exercise/sports 6-7 days a week)
          </label>
          <label>
            <input
              type="radio"
              onChange={handleActivity}
              name="activity"
              checked={activity === "1.9"}
              value="1.9"
            ></input>
            If you are extra active (very hard exercise/sports & physical job or
            2x training)
          </label>
          <h3>What are your weight goals</h3>
          <div className="weight-goal-radiogroup">
            <label>
              <input
                type="radio"
                onChange={handleGoal}
                name="goal"
                checked={goal === "-500"}
                value={"-500"}
              />
              Lose Weight
            </label>
            <label>
              <input
                type="radio"
                onChange={handleGoal}
                name="goal"
                checked={goal === "0"}
                value="0"
              />
              Maintain
            </label>
            <label>
              <input
                type="radio"
                onChange={handleGoal}
                name="goal"
                checked={goal === "+500"}
                value="+500"
              />
              Gain Weight
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MacroCalculator;
