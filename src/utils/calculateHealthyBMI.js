export const calculateHealthyBMI = (height) => {
    const heightInMeters = height / 100
    const healthyBmiMin = 18.5 * Math.pow(heightInMeters, 2)
    const healthyBmiMax = 24.9 * Math.pow(heightInMeters, 2)
    return `${healthyBmiMin.toFixed(2)} - ${healthyBmiMax.toFixed(2)}`
}