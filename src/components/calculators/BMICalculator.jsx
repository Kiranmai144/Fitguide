import { useState, memo } from "react"
import { FaCalculator } from "react-icons/fa"
import { getBMICategory } from "../../utils/getBMICategory"
import { getAgeCategory } from "../../utils/getAgeCategory"
import "./calculators.css"

const BMICalculator = memo(function BMICalculator() {

  const [values, setValues] = useState({showResults: false})

  const changeValues = (e) => {
    let val = e.target.value
    let name = e.target.name
    setValues({...values, [name]: val, showResults: false})
  }

  const calculateBMI = (e) => {
    e.preventDefault()
    if (Object.keys(values).length > 1) {
      let bmiValue
      let {age, height, weight} = values
      if (age >= 20) {
        bmiValue = weight / ((height / 100) ** 2)
      } else if (age >= 2 && age < 20) {
        bmiValue = (weight / ((height / 100) ** 2)) * 1.3
      } else {
        return
      }
      setValues({...values, bmi: bmiValue.toFixed(2), showResults: true})
    }
  }

  return (
    <div className="calculator" >
      <div className="calculator__introduction" >
        <div className="calculator__title">Introduction:</div>
        <p className="calculator__intro">BMI is a measurement of a person&#39;s leanness or corpulence based on their height and weight. It is widely used as a general indicator of whether a person has a healthy body weight for their height. Specifically, the value obtained from the calculation of BMI is used to categorize whether a person is underweight, normal weight, overweight, or obese depending on what range the value falls between.</p>
      </div>
      <form className="calculator__providers" onSubmit={(e) => calculateBMI(e)} >
        <div className="calculator__title">Calculation:</div>
        <div className="calculator__provider" >
          <label className="calculator__label" htmlFor="bmiage">Age</label>
          <input className="calculator__input" 
            id="bmiage" 
            name="age" 
            type="number" 
            onChange={(e) => changeValues(e)}
            required />
        </div>
        <div className="calculator__provider" >
          <label className="calculator__label" htmlFor="bmiheight">Height (cm)</label>
          <input className="calculator__input" 
            id="bmiheight" 
            name="height" 
            type="number" 
            onChange={(e) => changeValues(e)}
            required />
        </div>
        <div className="calculator__provider" >
          <label className="calculator__label" htmlFor="bmiweight">Weight (kg)</label>
          <input className="calculator__input" 
            id="bmiweight" 
            name="weight" 
            type="number" 
            onChange={(e) => changeValues(e)}
            required />
        </div>
        <div className="calculator__button" >
          <button className="primary-btn btn" type="submit" >Calculate <FaCalculator /></button>
        </div>
      </form>
      {values.showResults && (
      <div className="calculator__results" >
        <div className="calculator__title">Results:</div>
        <p className="calculator__result">Your BMI is <span className="calculator__result-span">{values.bmi}</span>, indecating your weight is in the <span className="calculator__result-span">{getBMICategory(values.age, values.bmi)}</span> category for <span className="calculator__result-span">{getAgeCategory(values.age)}</span> of your height.</p>
      </div>)}
    </div>
  )
})

export default BMICalculator