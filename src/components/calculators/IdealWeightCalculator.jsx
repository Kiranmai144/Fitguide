import { useState, memo } from "react"
import { FaCalculator } from "react-icons/fa"
import { calculateHealthyBMI } from "../../utils/calculateHealthyBMI"
import "./calculators.css"

const IdealWeightCalculator = memo(function IdealWeightCalculator() {
  const [values, setValues] = useState({showResults: false})

  const changeValues = (e) => {
    let val = e.target.value
    let name = e.target.name
    setValues({...values, [name]: val, showResults: false})
  }

  const calculateIdealWeights = (e) => {
    e.preventDefault()
    if (Object.keys(values).length > 1) {
      let {height} = values
      const heightInInches = height / 2.54
      const robinsonWeight = 52 + 1.9 * (heightInInches - 60)
      const millerWeight = 56.2 + 1.41 * (heightInInches - 60)
      const devineWeight = 50 + 2.3 * (heightInInches - 60)
      const hamwiWeight = 48 + 2.7 * (heightInInches - 60)
      const healthyBmiRange = calculateHealthyBMI(height)
      setValues({...values, robinson: robinsonWeight.toFixed(2), miller: millerWeight.toFixed(2), devine: devineWeight.toFixed(2), hamwi: hamwiWeight.toFixed(2), healthyBmiRange: healthyBmiRange, showResults: true})
    }
  }

  return (
    <div className="calculator" >
      <div className="calculator__introduction" >
        <div className="calculator__title">Introduction:</div>
        <p className="calculator__intro">The Ideal Weight Calculator computes ideal body weight (IBW) ranges based on height, gender, and age. The idea of finding the IBW using a formula has been sought after by many experts for a long time. Currently, there persist several popular formulas, and our Ideal Weight Calculator provides their results for side-to-side comparisons.</p>
      </div>
      <form className="calculator__providers" onSubmit={(e) => calculateIdealWeights(e)} >
        <div className="calculator__title">Calculation:</div>
        <div className="calculator__provider" >
          <label className="calculator__label" htmlFor="idealgender" >Gender</label>
          <select className="calculator__input" id="idealgender" name="gender" onChange={(e) => changeValues(e)} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="calculator__provider" >
          <label className="calculator__label" htmlFor="idealage">Age</label>
          <input className="calculator__input" 
            id="idealage" 
            name="age" 
            type="number" 
            onChange={(e) => changeValues(e)} 
            required />
        </div>
        <div className="calculator__provider" >
          <label className="calculator__label" htmlFor="idealheight">Height (cm)</label>
          <input className="calculator__input" 
            id="idealheight" 
            name="height" 
            type="number" 
            onChange={(e) => changeValues(e)} 
            required />
        </div>
        <div className="calculator__button" >
          <button className="primary-btn btn" type="submit">Calculate <FaCalculator /></button>
        </div>
      </form>
      {values.showResults && (
      <div className="calculator__results" >
        <div className="calculator__title">Results:</div>
        <p className="calculator__result">Robinson (1983): <span className="calculator__result-span">{values.robinson} kg</span>.</p>
        <p className="calculator__result">Miller (1983): <span className="calculator__result-span">{values.miller} kg</span>.</p>
        <p className="calculator__result">Devine (1974): <span className="calculator__result-span">{values.devine} kg</span>.</p>
        <p className="calculator__result">Hamwi (1964): <span className="calculator__result-span">{values.hamwi} kg</span>.</p>
        <p className="calculator__result">Healthy BMI Range: <span className="calculator__result-span">{values.healthyBmiRange} kg</span>.</p>
      </div>)}
    </div>
  )
})

export default IdealWeightCalculator