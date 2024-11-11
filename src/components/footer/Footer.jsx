import { memo } from "react"
import logoFooter from "../../assets/logofooter.webp"
import "./footer.css"

const Footer = memo(function Footer() {

    const currentYear = new Date().getFullYear().toString()

    return (
        <div className="footer">
            <div className="footer__copyright container">
                <div className="footer__logo">
                    <img className="footer__img" src={logoFooter} alt="website logo in the footer section" />
                </div>
                <div>
                    <p>&copy; Copyright {currentYear}</p>
                    Designed & built by <a className="footer__copyright-owner" href="https://elmo.onrender.com" target="_blank" rel="noopener noreferrer">GADDAM NIKITHA </a>
                </div>
            </div>
        </div>
    )
})

export default Footer