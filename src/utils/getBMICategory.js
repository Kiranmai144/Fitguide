export const getBMICategory = (age, bmi) => {
    if (age >= 20) {
        if (bmi < 16) {
            return "Severe Thinness"
        } else if (bmi >= 16 && bmi < 17) {
            return "Moderate Thinness"
        } else if (bmi >= 17 && bmi < 18.5) {
            return "Mild Thinness"
        } else if (bmi >= 18.5 && bmi < 25) {
            return "Normal"
        } else if (bmi >= 25 && bmi < 30) {
            return "Overweight"
        } else if (bmi >= 30 && bmi < 35) {
            return "Obese Class I"
        } else if (bmi >= 35 && bmi < 40) {
            return "Obese Class II"
        } else {
            return "Obese Class III"
        }
    } else if (age >= 2 && age < 20) {
        if (bmi < 5) {
            return "Underweight"
        } else if (bmi >= 5 && bmi < 85) {
            return "Healthy weight"
        } else if (bmi >= 85 && bmi < 95) {
            return "At risk of overweight"
        } else {
            return "Overweight"
        }
    } else {
        return "Invalid age"
    }
};