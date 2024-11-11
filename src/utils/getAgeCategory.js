export const getAgeCategory = (age) => {
    if (age >= 20) {
        return "adults"
    } else if (age >= 2 && age < 20) {
        return "children and teenagers"
    } else {
        return "Invalid age"
    }
} 