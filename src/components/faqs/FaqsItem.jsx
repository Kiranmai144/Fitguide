import { useState, memo } from "react"
import { BiPlus, BiMinus } from "react-icons/bi"
import PropTypes from "prop-types"
import "./faqs.css"

const FaqsItem = memo(function FaqsItem ({ question, answer}) {

    const [isClicked, setIsClicked] = useState(false)

    function handleClick() {
        setIsClicked(prevIsClicked => !prevIsClicked)
    }

    return (
        <div className={`faqs__item ${isClicked ? "faqs__item--clicked" : ""}`} >
            <p className={`faqs__question ${isClicked ? "faqs__question--clicked" : ""}`} onClick={handleClick}>
                {question}
                <span className='faqs__extend'>
                    <BiPlus className={`faqs__icon ${isClicked ? "faqs__icon--hide" : ""}`} />
                    <BiMinus className={`faqs__icon ${isClicked ? "" : "faqs__icon--hide"}`}/>
                </span>
            </p>
            <p className={`faqs__answer ${isClicked ? "faqs__answer--show" : ""}`}>
                {answer}
            </p>
        </div>
    )
})

export default FaqsItem

FaqsItem.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired
}