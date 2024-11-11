import { useState, memo } from "react"
import { FaChevronRight } from "react-icons/fa"
import PropTypes from "prop-types"
import "./calculatorItem.css"

const CalculatorItem = memo(function CalculatorItem ({ calculator, component}) {

    const [isClicked, setIsClicked] = useState(false)

    function handleClick() {
        setIsClicked(prevIsClicked => !prevIsClicked)
    }

    return (
    <div className={`calculators__item ${isClicked ? "calculators__item--clicked" : ""}`}>
        <div className={`calculators__calculator ${isClicked ? "calculators__calculator--clicked" : ""}`} onClick={handleClick}>
            <span className='calculators__extend'>
                <FaChevronRight className={`${isClicked ? "calculators__icon--rotate" : ""}`} />
            </span>
            {calculator}
        </div>
        <div className={`calculators__component ${isClicked ? "calculators__component--show" : ""}`}>
            {component}
        </div>
    </div>)
})

export default CalculatorItem

CalculatorItem.propTypes = {
    calculator: PropTypes.string.isRequired,
    component: PropTypes.element.isRequired
}