import { useState, memo } from "react"
import { FaCalculator } from "react-icons/fa"
import "./calculators.css"

const BodyFatCalculator = memo(function BodyFatCalculator() {

  const [values, setValues] = useState({showResults: false})

  const changeValues = (e) => {
    let val = e.target.value
    let name = e.target.name
    setValues({...values, [name]: val, showResults: false})
  }

  const calculateBodyFatPercentage = (e) => {
    e.preventDefault()
    if (Object.keys(values).length !== 0) {
      let { gender, height, weight } = values
      let bodyFatPercentage
      let leanMass
      let fatMass
      if (gender === "male") {
        leanMass = 0.32810 * weight + 0.33929 * height - 29.5336
      } else if (gender === "female") {
        leanMass = 0.29569 * weight + 0.41813 * height - 43.2933
      }
      fatMass = weight - leanMass
      bodyFatPercentage = (fatMass / weight) * 100
      setValues({...values, bodyFatPercentage: bodyFatPercentage.toFixed(2), leanMass: leanMass.toFixed(2), fatMass: fatMass.toFixed(2), showResults: true})
    }
  }

  return (
    <>
      <div className="calculator__introduction" >
        <div className="calculator__title">Introduction:</div>
        <p className="calculator__intro">The Body Fat Calculator can be used to estimate your total body fat based on specific measurements. Generally, a good body fat percentage range for women is 21 to 35 percent, and for men, it&#39;s 8 to 24 percent depending on age. Your resting metabolic rate changes as you age; fat mass increases while muscle mass decreases. Thus, the low end of the range would apply to younger adults and then trend upwards with age.</p>
      </div>
      <form className="calculator__providers" onSubmit={(e) => calculateBodyFatPercentage(e)} >
        <div className="calculator__title">Calculation:</div>
        <div className="calculator__provider" >
          <label className="calculator__label" htmlFor="fatgender" >Gender</label>
          <select className="calculator__input" id="fatgender" name="gender" onChange={(e) => changeValues(e)} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="calculator__provider" >
          <label className="calculator__label" htmlFor="fatage">Age</label>
          <input className="calculator__input" 
            id="fatage" 
            name="age" 
            type="number" 
            onChange={(e) => changeValues(e)}
            required />
        </div>
        <div className="calculator__provider" >
          <label className="calculator__label" htmlFor="fatheight">Height (cm)</label>
          <input className="calculator__input" 
            id="fatheight" 
            name="height" 
            type="number" 
            onChange={(e) => changeValues(e)}
            required />
        </div>
        <div className="calculator__provider" >
          <label className="calculator__label" htmlFor="fatweight">Weight (kg)</label>
          <input className="calculator__input" 
            id="fatweight" 
            name="weight" 
            type="number" 
            onChange={(e) => changeValues(e)}
            required />
        </div>
        <div className="calculator__provider" >
          <label className="calculator__label" htmlFor="fatneck">Neck (cm)</label>
          <input className="calculator__input" 
            id="fatneck" 
            name="neck" 
            type="number" 
            onChange={(e) => changeValues(e)}
            required />
        </div>
        {values.gender === "female" && (
        <div className="calculator__provider" >
          <label className="calculator__label" htmlFor="fathip">Hip (cm)</label>
          <input className="calculator__input" 
            id="fathip" 
            name="hip" 
            type="number" 
            onChange={(e) => changeValues(e)}
            required />
        </div>)}
        <div className="calculator__provider" >
          <label className="calculator__label" htmlFor="fatwaist">Waist (cm)</label>
          <input className="calculator__input" 
            id="fatwaist" 
            name="waist" 
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
        <p className="calculator__result">Your body fat percentage is <span className="calculator__result-span">{values.bodyFatPercentage}%</span>.</p>
        <p className="calculator__result">Your fat mass is <span className="calculator__result-span">{values.fatMass} kg</span>.</p>
        <p className="calculator__result">Your lean mass is <span className="calculator__result-span">{values.leanMass} kg</span>.</p>
      </div>)}
    </>
  )
})

export default BodyFatCalculator