import { useState, memo } from "react"
import advice from "../../data/advice"
import { FaCaretDown } from "react-icons/fa"
import "./advice.css"

const Advice = memo(function Advice() {

    const [itemsToShow, setItemsToShow] = useState(3)

    const handleShowMore = () => {
        setItemsToShow((prevItems) => prevItems + 3)
    }

    return (
        <div className="advice container">
            <h2>Workouts advice</h2>
            {advice.slice(0, itemsToShow).map((item) => (
                <div className="advice__container" key={item.id}>
                    <div className="advice__number">{item.id}</div>
                    <div className="advice__content">
                        <h3 className="advice__subtitle">{item.title}</h3>
                        <p className="advice__para">{item.paragraph}</p>
                    </div>
                </div>
            ))}
            {itemsToShow < advice.length && (
                <div className="primary-btn__container">
                    <button className="primary-btn btn" onClick={handleShowMore}>Show more <FaCaretDown /></button>
                </div>
            )}
        </div> 
    )
})

export default Advice