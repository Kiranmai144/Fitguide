import BMICalculator from "../components/calculators/BMICalculator"
import BodyFatCalculator from "../components/calculators/BodyFatCalculator"
import IdealWeightCalculator from "../components/calculators/IdealWeightCalculator"
import CalorieCalculator from "../components/calculators/CalorieCalculator"

const calculators = [
    {id: 1, calculator: "BMI Calculator", component: <BMICalculator /> },
    {id: 2, calculator: "Body Fat Calculator", component: <BodyFatCalculator /> },
    {id: 3, calculator: "Ideal Weight Calculator", component: <IdealWeightCalculator /> },
    {id: 4, calculator: "Calorie Calculator", component: <CalorieCalculator /> },
    
]

export default calculators