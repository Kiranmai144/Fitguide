import { useState, memo } from "react"
import FaqsItem from "./FaqsItem"
import faqs from "../../data/faqs"
import { FaCaretDown } from "react-icons/fa"
import "./faqs.css"

const Faqs = memo(function Faqs() {

    const [itemsToShow, setItemsToShow] = useState(3)

    const handleShowMore = () => {
        setItemsToShow((prevItems) => prevItems + 3)
    }

    return (
        <div className="faqs container">
            <h2>Workouts F.A.Q.</h2>
            {faqs.slice(0, itemsToShow).map((faq) => (
                <FaqsItem key={faq.id} question={faq.question} answer={faq.answer}/>
            ))}
            {itemsToShow < faqs.length && (
                <div className="primary-btn__container">
                    <button className="primary-btn btn" onClick={handleShowMore}>Show more<FaCaretDown /></button>
                </div>
            )}
        </div> 
    )
})

export default Faqs