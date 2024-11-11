import { Link as LinkRouter } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa"
import "./landing.css"

const Landing = () => {
    return (
        <div className="landing">
            <div className="landing__overlay"></div>
            <div className="landing__content container" >
                <h1 className="landing__heading">Most extensive range of FREE exercises!</h1>
                <p className="landing__para">Stay consistent in your fitness journey with the most comprehensive database of free exercises.</p>
                <LinkRouter className="landing__btn btn" to="/exercises">View all exercises<FaArrowRight /></LinkRouter>
            </div>
        </div>
    )
}

export default Landing