import { useState, memo } from "react"
import { FaCalculator } from "react-icons/fa"
import "./calculators.css"

const CalorieCalculator = memo(function CalorieCalculator() {

  const [values, setValues] = useState({showResults: false})

  const changeValues = (e) => {
    let val = e.target.value
    let name = e.target.name
    setValues({...values, [name]: val, showResults: false})
  }

  const calculateCalories = (e) => {
    e.preventDefault()
    if (Object.keys(values).length > 1) {
      let {gender, age, height, weight, activityLevel} = values
      let bmr = 0
      if (gender === "male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5
      } else if (gender === "female") {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161
      }
      let calorieIntake = 0
      if (activityLevel === "sedentary") {
        calorieIntake = bmr * 1.2
      } else if (activityLevel === "lightlyActive") {
        calorieIntake = bmr * 1.375
      } else if (activityLevel === "moderatelyActive") {
        calorieIntake = bmr * 1.55
      } else if (activityLevel === "veryActive") {
        calorieIntake = bmr * 1.725
      } else if (activityLevel === "extraActive") {
        calorieIntake = bmr * 1.9
      }  
      setValues({...values, calories: Math.round(calorieIntake), showResults: true})
    }
  }

  return (
    <div className="calculator" >
      <div className="calculator__introduction" >
        <div className="calculator__title">Introduction:</div>
        <p className="calculator__intro">The Calorie Calculator can be used to estimate the number of calories a person needs to consume each day. This calculator can also provide some simple guidelines for gaining or losing weight.</p>
      </div>
      <form className="calculator__providers" onSubmit={(e) => calculateCalories(e)} >
        <div className="calculator__title">Calculation:</div>
        <div className="calculator__provider" >
          <label className="calculator__label" htmlFor="calgender" >Gender</label>
          <select className="calculator__input" id="calgender" name="gender" onChange={(e) => changeValues(e)} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="calculator__provider" >
          <label className="calculator__label" htmlFor="calage">Age</label>
          <input className="calculator__input" 
            id="calage" 
            name="age" 
            type="number" 
            onChange={(e) => changeValues(e)}
            required />
        </div>
        <div className="calculator__provider" >
          <label className="calculator__label" htmlFor="calheight">Height (cm)</label>
          <input className="calculator__input" 
            id="calheight" 
            name="height" 
            type="number" 
            onChange={(e) => changeValues(e)}
            required />
        </div>
        <div className="calculator__provider" >
          <label className="calculator__label" htmlFor="calweight">Weight (kg)</label>
          <input className="calculator__input" 
            id="calweight" 
            name="weight" 
            type="number" 
            onChange={(e) => changeValues(e)}
            required />
        </div>
        <div className="calculator__provider" >
          <label className="calculator__label" htmlFor="callevel" >Activity Level</label>
          <select className="calculator__input" id="callevel" name="activityLevel" onChange={(e) => changeValues(e)} required>
            <option value="">Select a level</option>
            <option value="sedentary">Sedentary</option>
            <option value="lightlyActive">Lightly Active</option>
            <option value="moderatelyActive">Moderately Active</option>
            <option value="veryActive">Very Active</option>
            <option value="extraActive">Extra Active</option>
          </select>
        </div>
        <div className="calculator__button" >
          <button className="primary-btn btn" type="submit">Calculate <FaCalculator /></button>
        </div>
      </form>
      {values.showResults && (
      <div className="calculator__results" >
        <div className="calculator__title">Results:</div>
        <p className="calculator__result">Your <span className="calculator__result-span">daily calorie intake</span> should be approximately <span className="calculator__result-span">{values.calories}</span> calories.</p>
      </div>)}
    </div>
  )
})

export default CalorieCalculator